import React from 'react';
import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
        <div className={styles.allParent}>
            <div className={`d-flex ${styles.footerHeader}`}>
                <div className={`col-lg-1 ${styles.first}`}>
                    <p>سایت ما </p> 
                    <ul>
                        <li>کارمزد </li>
                        <li>قوانین و مقررات </li>
                        <li>ارتباط با مدیریت </li>
                        <li>فرصت های شغلی</li>
                        <li>درباره ما </li>
                    </ul>

                </div>
                <div className={`col-lg-1 ${styles.secound}`}>
                    <p>سرویس ها </p>
                    <ul>
                        <li>قیمت لحظه ای </li>
                        <li>پرتفوی</li>
                        <li>بیت گپ</li>
                        <li>خبر فوری</li>
                        <li>مشاوره آنلاین </li>
                        <li>آموزش</li>
                    </ul>

                </div>

                <div className={`col-lg-1 ${styles.third}`}>
                    <p> راهنمایی و مشاوره </p>
                    <ul>
                        <li>سوالات متداول</li>
                        <li>تماس با پشتیبانی</li>
                        <li>آموزش ساخت کیف پول</li>
                    </ul>
                </div>

                <div className={`col-lg-3 ${styles.fourth}`}>
                    <div className={`d-flex ${styles.call}`}> 
                       <div>شماره تماس</div> 
                        <div>85692529(021)</div>
                    </div>

                    <div className={`d-flex ${styles.call}`}>
                        <div>ایمیل</div>
                        <div>navidiamiirhossein</div>
                    </div>
                </div>

                <div className={`col-lg-1 ${styles.fifth}`}>
                    <p>یه تجربه خوب از دنیای ارز دیجیتال</p>
                </div>
            </div>

            <div className={`col-lg-12 d-flex justify-content-center align-items-center ${styles.bottomParent}`}>
           
            <div className={`d-flex col-lg-8 ${styles.body}`}>
                 <div  className='col-lg-2'>
                    <span>خرید و فروش آسان </span><br/>
                    <span>کاملا سریع و ساده </span>
                 </div>
                 <div className='col-lg-2'>
                    <span>بیش از <small>300</small>نوع ارز </span><br />
                    <span>تنها صرافی در ایران !</span>
                 </div>
                 <div className='col-lg-2'>
                    <span>قیمت مناسب</span><br />
                    <span>کمترین کارمزد</span>
                 </div>
                 <div className='col-lg-2'>
                    <span>پشتیبانی <small>24</small>ساعته </span><br />
                    <span>حتی جمعه ها !</span>
                 </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;