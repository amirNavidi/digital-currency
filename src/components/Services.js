import React from 'react';

// components
import Service from './Service.js';

// data
import {data} from "../data/service.js"

// styles
import styles from "../styles/service.module.css"

const Services = () => {
    return (
        <div>
           <div className={`col-12 ${styles.serviceParent}`}>
               <h2>سرویس های ما </h2>
               <div className={styles.color}>
                    <span className={`${styles.one}`}></span>
                    <span className={`${styles.two}`}></span>
                    <span className={`${styles.three}`}></span>
                    <span className={`${styles.four}`}></span>
                </div>
        
           <div className='col-12 d-flex justify-content-center'>
           <p className={`d-flex justify-content-start flex-wrap col-9`} >سرویس ها </p>
           </div>
           
           <div className='col-12 d-flex justify-content-center'>
            <div className={`d-flex justify-content-start flex-wrap col-9 ${styles.innerService}`}>
                {
                    data.map(item=>{
                    return   <Service  key={item.id} data={item} />
                        })
                }
            </div>
           </div>
           </div> 
        </div>
    );
};

export default Services;