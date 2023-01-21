import React from 'react';
import styles from "../styles/comment.module.css"
import * as Icon from 'react-bootstrap-icons';

// images
import person1 from "../images/person1.webp";
import person2 from "../images/person2.webp";
import person3 from "../images/person3.webp"

const Comment = () => {
    return (
        <div>
            <div className={styles.parent}>
                 <div className={`d-flex justify-content-center ${styles.header}`}>
                    <div className={styles}>
                        <h4>نظرات کاربران </h4>
                        <div className={styles.color}>
                            <span className={`${styles.one}`}></span>
                            <span className={`${styles.two}`}></span>
                            <span className={`${styles.three}`}></span>
                            <span className={`${styles.four}`}></span>
                        </div>
                        <div className={`col-lg-12 d-flex justify-content-center`}>
                            <p className='col-lg-8'>
                                ما تنها صرافی با بیش از ۳۰۰ ارز و قیمت مناسب در ایران هستیم که در کنار ظاهری سریع و آسان، پشتیبانی ۲۴ ساعته ارائه میده تا خیالتون از هر بابت راحت باشه
                            </p>
                        </div>
                    </div>
                 </div>

                 <div className={`col-12 d-flex flex-wrap justify-content-center  ${styles.body}`}>
                    <div className={`col-md-3 col-11  ${styles.section}`}>
                        <div className={`d-flex align-items-center  ${styles.imgFluid}`}>
                            <img src={person1} alt="person" />
                            <div>
                                <span className={styles.name}>مرتضی احمدی</span><br />
                                <span> عضویت ....</span>
                            </div>
                        </div>
                        <p className={styles.comment}>سپاس فروان </p>

                        <span className={styles.bottom}><Icon.Clock />16 ساعت پیش</span>
                    </div>
                    <div className={`col-md-3 col-11  ${styles.section}`}>
                        <div className={`d-flex align-items-center  ${styles.imgFluid}`}>
                            <img src={person2} alt="person" />
                            <div>
                                <span className={styles.name}>مرتضی احمدی</span><br />
                                <span> عضویت ....</span>
                            </div>
                        </div>
                        <p className={styles.comment}>سپاس فروان </p>

                        <span className={styles.bottom}><Icon.Clock />16 ساعت پیش</span>
                    </div>
                    <div className={`col-md-3 col-11  ${styles.section}`}>
                        <div className={`d-flex align-items-center  ${styles.imgFluid}`}>
                            <img src={person3} alt="person" />
                            <div>
                                <span className={styles.name}>مرتضی احمدی</span><br />
                                <span> عضویت ....</span>
                            </div>
                        </div>
                        <p className={styles.comment}>سپاس فروان </p>

                        <span className={styles.bottom}><Icon.Clock />16 ساعت پیش</span>
                    </div>

                 
                 </div>
            </div>
        </div>
    );
};

export default Comment;