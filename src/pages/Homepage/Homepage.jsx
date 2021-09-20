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

    useEffect(()=>{
        const SERVER_URL = process.env.REACT_APP_SERVER_URL;
        const SERVER_ENV_AUTH = process.env.REACT_APP_SERVER_ENV_AUTH;

        fetch(`${SERVER_URL}?${SERVER_ENV_AUTH}`)
        .then((response)=> response.json())
        .then((data)=>{
            // console.log(data);
            setErr(false);
            setBlogArr(data.entries);
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
                <BlogTiles key={item.uid} id={item.uid} item={item} onClick={clickHandler}/>
            ))
        }
        </>
        
    }
    </div>
}

export default Homepage;