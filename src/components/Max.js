import React from 'react';
import styles from "../styles/instant.module.css"

const Max = ({data }) => {
    const {img , name , desc , price , sell, change}=data;
    return (
        <div className={`d-flex justify-content-around align-items-center col-12 ${styles.maxParent}`}>
            <div className={`d-flex col-2 ${styles.right} `}>
                <img src={require(`../images/${img}.webp`)} alt="" />
                <div>
                    <span>{name}</span><br/>
                    <span className={styles.desc}>{desc}</span>
                 </div>
            </div>
            <span className={`col-2 ${styles.price}`}>{price}<small>تومان </small></span>
            <span className={`col-2 ${styles.sell}`}>{sell}<small>تومان </small></span>
            <span className={`col-2 ${styles.posetive}`}>{change}</span>
            
        </div>
    );
};

export default Max;