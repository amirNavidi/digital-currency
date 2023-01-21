import React from 'react';

// icons
import * as Icon from 'react-bootstrap-icons';

// styles
import styles from "../styles/news.module.css";

// images
import bit from "../images/bitI.jfif";
import hand from "../images/handI.jfif";
import jungle from "../images/jungleI.png";


const News = () => {
    return (
        <div className={ `col-12  ${styles.paretn}`}>
          <div className=' col-12 d-flex  justify-content-center'>
            <div className={` d-flex col-9 justify-content-between ${styles.header}`}>
                <span>نگاهی  به اخبار</span>
                <span>همه </span>
            </div>
          </div>

           <div className={ ` d-flex flex-wrap col-12 justify-content-center ${styles.body}`}>
              <div className={`col-10 col-md-3 ${styles.section }`}>
                <div className={`${styles.imgFluid}`}>
                    <img src={bit} alt="bit" />
                </div>
                <div className={`d-flex align-items-center ${styles.underImage}`}>
                    <div className=''>
                        <h6>تحلیل وضعیت بیت کوین گلد</h6>
                        <Icon.Clock style={{color:"blue"}} /><span>1 روز پیش توسط...</span>
                    </div>
                </div>
              </div>

              <div className={`col-10 col-md-3 ${styles.section }`}>
                <div className={`${styles.imgFluid}`}>
                    <img src={hand} alt="hand" />
                </div>
                <div className={`d-flex align-items-center ${styles.underImage}`}>
                    <div>
                        <h6>نگاهی به وی چین</h6>
                        <Icon.Clock /><span>1روز پیش توسط</span>
                    </div>
                </div>
              </div>

              <div className={`col-10 col-md-3 ${styles.section }`}>
                <div className={`${styles.imgFluid}`}>
                    <img src={jungle} alt="jungle" />
                </div>
                <div className={`d-flex align-items-center ${styles.underImage}`}>
                   <div>
                   <h6>تحلیل وضعیت دیسنترالند </h6>
                   <Icon.Clock /> <span>1 روز پیش توسط</span>
                   </div>
                </div>
              </div>
           </div>
        </div>
    )
};

export default News;