import React from 'react';

// styles
import styles from "../styles/advertising.module.css";

// images
import google from "../images/google.svg"
import bazar from "../images/bazar.svg"
import mobile from "../images/mobile.png"
import sib from "../images/sib.svg"
import sibcheh from "../images/sibche.svg"
import anar from "../images/anar.svg"
import pishro from "../images/pishro.svg"

const Advertising = () => {
    return (
        <div className={`d-flex col-12 justify-content-center ${styles.parent}`}>
            <div className={`col-9 ${styles.bluePage}`}>
                     <div className={styles.rightParent}>
                       <div className={styles.textParent}>
                            <h4>الان اپلیکیشن رو نصب کنید </h4>
                            <p>تا در لحظه خرید و فروش کنید </p>
                            <ul>
                                <li>دسترسی سریع </li>
                                <li>مشاهده وضعیت سفارشات </li>
                                <li>امکان احراز هویت</li>
                            </ul>
                       </div>

                        <div className={styles.parent}>
                          <div className={`col-md-4 d-flex justify-content-between ${styles.sectionParent}`}>
                                <div className={`col-md-6 d-flex justify-content-around align-items-center ${styles.section}`}>
                                        <div>
                                        <span className={styles.get}>دریافت از</span><br />
                                        <span className={styles.nameApp}>Google Play</span>
                                        </div>
                                        <div className={styles.imgFluid}>
                                            <img src={google} alt="google" />
                                        </div>
                                </div>

                                <div className={`col-md-6 d-flex justify-content-around align-items-center ${styles.section}`}>
                                        <div>
                                        <span className={styles.get}>دریافت از</span><br />
                                        <span className={styles.nameApp}>کافه بازار</span>
                                        </div>
                                        <div className={styles.imgFluid}>
                                            <img src={bazar} alt="bazar" />
                                        </div>
                                </div>

                          </div>

                          <div className={`col-md-4 d-flex justify-content-between ${styles.sectionParent}`}>
                                <div className={`col-md-6 d-flex justify-content-around align-items-center ${styles.section}`}>
                                        <div>
                                        <span className={styles.get}>دریافت از</span><br />
                                        <span className={styles.nameApp}>سیب اپ</span>
                                        </div>
                                        <div className={styles.imgFluid}>
                                            <img src={sib} alt="sib" />
                                        </div>
                                </div>

                                <div className={`col-md-6 d-flex justify-content-around align-items-center ${styles.section}`}>
                                        <div>
                                        <span className={styles.get}>دریافت از</span><br />
                                        <span className={styles.nameApp}>سیبچه </span>
                                        </div>
                                        <div className={styles.imgFluid}>
                                            <img src={sibcheh} alt="sibcheh" />
                                        </div>
                                </div>


                          </div>

                          <div className={`col-md-4 d-flex justify-content-between ${styles.sectionParent}`}>
                                <div className={`col-md-6 d-flex justify-content-around align-items-center ${styles.section}`}>
                                        <div>
                                        <span className={styles.get}>دریافت از</span><br />
                                        <span className={styles.nameApp}>انار دونی</span>
                                        </div>
                                        <div className={styles.imgFluid}>
                                            <img src={anar} alt="anar" />
                                        </div>
                                </div>

                                <div className={`col-md-6 d-flex justify-content-around align-items-center ${styles.section}`}>
                                        <div>
                                        <span className={styles.get}>دریافت از</span><br />
                                        <span className={styles.nameApp}> پیشرو</span>
                                        </div>
                                        <div className={styles.imgFluid}>
                                            <img src={pishro} alt="pishro" />
                                        </div>
                                </div>


                          </div>

                          
                        </div>

                     </div>

                     <div className={styles.leftParent}>
                        <img src={mobile} alt="mobile" />
                     </div>
            </div>
        </div>
    );
};

export default Advertising;