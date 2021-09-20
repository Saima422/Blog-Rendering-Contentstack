import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ErrModal from '../../components/ErrModal/ErrModal';
import styles from './Blogpage.module.scss';

function Blogpage(){
    const { id } = useParams();
    const [err, setErr] = useState(true);
    const [blog, setBlog] = useState({});
    const [url, setUrl] = useState(false);
    
    useEffect(() => {
        const SERVER_URL = process.env.REACT_APP_SERVER_URL;
        const SERVER_ENV_AUTH = process.env.REACT_APP_SERVER_ENV_AUTH;

        
        fetch(`${SERVER_URL}/${id}?${SERVER_ENV_AUTH}`)
        .then((response) => response.json())
        .then((data) => {
            setErr(false);
            setBlog(data.entry);
            if(data.entry.blogimage.url){
                setUrl(true);
            }
            // console.log(data.entry);
        })
        .catch((err) => {
            console.log(err);
            setErr(true);
        })
    },[id]);

    return <>
    {
        err ?
        <ErrModal msg="Server Offline"/>
        :
        <div className={styles.blogContainer}>
            <div className={styles.blog}>
                <div className={styles.blogContent}>
                    <h1>{blog.title}</h1>
                    <div className={styles.blogImage}>
                        {url ?
                        <img src={blog.blogimage.url} alt='blog'></img>
                        :
                        <img src={blog.blogimage} alt='blog'></img>}
                    </div> 
                    <h4>Posted On: {blog.createdat}</h4>
                    <h4>Author: {blog.author}</h4>
                    <div className={styles.content}>{blog.blogcontent}</div> 
                </div>
                <div className={styles.blogAside}>
                    <h2>Related Links</h2>
                    {blog.relatedlinks?
                        blog.relatedlinks.map((item)=>(
                            <div key={item.linkinfo.reflink[0].uid} className={styles.linkBox}>
                            <Link to={`/${item.linkinfo.reflink[0].uid}`} className={styles.link}>{item.linkinfo.linktitle}</Link>
                            <br></br>
                            </div>
                        ))
                        :
                        <h5>None</h5>
                    }
                </div>
            </div>
        </div>
    }   
    </>
}

export default Blogpage;