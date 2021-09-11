import React from 'react';
import styles from './ErrModal.module.scss';

function ErrModal({msg}){

    return <div className={styles.modalContainer}>
        <div className={styles.modal}>
            <h4>{msg}</h4>
        </div>
    </div>
}

export default ErrModal;