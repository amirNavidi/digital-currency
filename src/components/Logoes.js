import React from 'react';

import styles from "../styles/logoes.module.css"

import logoes from "../images/logoes.webp"

const Logoes = () => {
    return (
        <div className={`d-flex flex-wrap align-items-center justify-content-center ${styles.parent}`}>
            <div className={`col-12 col-md-4 ${styles.imgFluid}`}>
                <img src={logoes} alt="logoes" />
            </div>
            <div className={`col-11 col-md-4 ${styles.leftParent}`}>
                <p>تنوع ارز‌ها</p>
                <h5>هر ارزی که فکرش رو کنی ما داریم!</h5>
                <p>ما بیش‌ از ۳۰۰ نوع ارز داریم که هیچگونه محدودیتی برای خرید و فروششون نداریم پس با خیال راحت می‌تونین روی ارز‌ها سرمایه گذاری کنین.</p>
            </div>
        </div>
    );
};

export default Logoes;