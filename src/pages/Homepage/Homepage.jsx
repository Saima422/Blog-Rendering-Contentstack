import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import BlogTiles from '../../components/BlogTitles/BlogTiles';
import ErrModal from '../../components/ErrModal/ErrModal';
import styles from './Homepage.module.scss';

function Homepage(){
    const [blogArr, setBlogArr] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [err, setErr] = useState(true);
    const [id, setId] = useState('');

    const url = "https://blog-hosted-backend-server.herokuapp.com/blogs";

    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            setErr(false);
            setBlogArr(data.data);
        })
        .catch((err)=>{
            console.log(err);
            setErr(true);
        })
        
    },[])

    const clickHandler = (event) => {
        setId(event.target.parentElement.id);
        setRedirect(true);
    }

    return <div className={styles.blogContainer}>
    {
        redirect ? 
        <Redirect to={`/${id}`} id={id}/>
        :
        <>
        {
            err ?
            <ErrModal msg="Server Offline"/>
            :
            blogArr.map((item) => (
                <BlogTiles key={item.blogId} id={item.blogId} item={item} onClick={clickHandler}/>
            ))
        }
        </>
        
    }
    </div>
}

export default Homepage;