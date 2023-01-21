import React from 'react';

// styles
import styles from "../styles/service.module.css"

// image
import img from "../images/bitmag.png"
import * as Icon from 'react-bootstrap-icons';


const Service = ({data}) => {
    return (
        <div className='col-11 col-md-4 '>
            <div className={`${styles.parent}`}>
                <div className={`d-flex align-items-center  ${styles.rightFluid}`}>
                   <img src={img} alt="img" />
                   <div className={styles.sParent}>
                        <span>{data.text}</span><br />
                        <span>{data.description}</span>
                   </div>
                    <div className={styles.iconParent}>
                      <Icon.ArrowLeft size={20} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;