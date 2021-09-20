import React from 'react';
import styles from './BlogTiles.module.scss';

function BlogTiles({item, onClick, id}){
    return <>
        <div className={styles.container} id={id}>
            <div className={styles.imageBlock}>
                <img src={item.blogimage.url} alt='Blog'></img>
            </div>
            <h3>{item.title}</h3>
            <h5>Author: {item.author}</h5>
            <h5>Date: {item.createdat}</h5>
            <button onClick={onClick} className={styles.button}>View Full Blog</button>
        </div>
    </>
}

export default BlogTiles;