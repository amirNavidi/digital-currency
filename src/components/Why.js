import React from 'react';

// styles
import styles from "../styles/why.module.css"

const Why = () => {
    return (
        <div>
            <div className={`col-12 ${styles.parent}`}>
                <h2>چراباید ما را انتخاب کنید؟</h2>
                <div className={styles.color}>
                    <span className={`${styles.one}`}></span>
                    <span className={`${styles.two}`}></span>
                    <span className={`${styles.three}`}></span>
                    <span className={`${styles.four}`}></span>
                </div>
                <div className={`col-12 ${styles.descriptParent}`}>
                    <p className={` col-6 ${styles.description}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                </div>

                <div className={`col-12 d-flex justify-content-center ${styles.bottomParent}`}>
                    <div>
                        <p>خرید و فروش آسان</p>
                        <span>کاملا سریع و ساده </span>
                    </div>
                    <div>
                        <p>بیش از <span className={styles.number} >300</span> نوع عرض </p>
                        <span>تنها صرافی در ایران </span>
                    </div>
                    <div>
                        <p>قیمت مناسب</p>
                        <span>کمترین مقدار کارمزد</span>
                    </div>
                    <div>
                        <p>پشتیبانی <span className={styles.number}>24</span> ساعته </p>
                        <span>حتی جمعه ها </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;