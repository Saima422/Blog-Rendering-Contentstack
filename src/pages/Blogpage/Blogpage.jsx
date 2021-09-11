import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ErrModal from '../../components/ErrModal/ErrModal';
import styles from './Blogpage.module.scss';

function Blogpage(){
    const { id } = useParams();
    const url = 'https://blog-hosted-backend-server.herokuapp.com/blogs';
    const [err, setErr] = useState(true);
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`${url}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
            setErr(false);
            setBlog(data.data);
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
                    <h1>{blog.blogTitle}</h1>
                    <div className={styles.blogImage}>
                        <img src={blog.blogImage} alt='blog'></img>
                    </div> 
                    <h4>Posted On: {blog.createdAt}</h4>
                    <h4>Author: {blog.author}</h4>
                    <div className={styles.content}>{blog.blogContent}</div> 
                </div>
                <div className={styles.blogAside}>
                    <h2>Related Links</h2>
                    {blog.relatedLinks?
                        blog.relatedLinks.map((item)=>(
                            <div key={item.refId} className={styles.linkBox}>
                            <Link to={`/${item.refId}`} className={styles.link}>{item.title}</Link>
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