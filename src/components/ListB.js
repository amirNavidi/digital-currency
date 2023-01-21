import React from 'react';
// styles
import styles from "../styles/list.module.css"

const ListB = ({data  ,func}) => {
    const {img  , id , name , desc , price } =data;
    return (
       
            <div onClick={(ev)=>func(ev,id)} className={`d-flex justify-content-around ${styles.mainParent}` } >
                <div className={`d-flex ${styles.nameParent}`} >
                    <img src={ require(`../images/${img}.webp`)}alt="" />
                    <div>
                        <span> {name} </span><br />
                        <span>{desc}</span>
                    </div>
                </div>
                <div className={styles.priceParent}>
                    <span>قیمت  </span><br />
                    <span className={styles.price}>{price} </span>  <small>تومان </small>
                </div>

            </div>
     
    );
};

export default ListB;