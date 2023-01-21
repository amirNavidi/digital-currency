
import React ,{useState} from 'react';
import { Routes , Route ,Link } from 'react-router-dom';

// components
import Max from './Max';
import Min from "./Min"

// styles
import styles from "../styles/instant.module.css"

// data
import {tableData} from "../data/tableData"

// images
import max from "../images/max.png";
import min from "../images/min.png"

const Instant = () => {
    const [color , setColor]=useState({
        max:true,
        min:false
    })

    return (
        <div  className={`d-flex justify-content-center ${styles.allParent}`}>
            <div className={`col-9 ${styles.whiteParent}`}>

                 <div className={styles.top}>
                    <div className={`d-flex justify-content-between ${styles.instantPrice}`}>
                        <div className={styles.priceParent}>
                            <span>قیمت لحظه ای </span><br/>
                            <span> در <small>24</small>ساعت گذشته </span>
                        </div>
                        <span className={styles.showAll}>نمایش همه </span>
                    </div>
                     
                    <div className={` col-md-4 col-10  ${styles.rate}`}>
                         <div className={`d-flex align-items-center  ${styles.innerRate}`}>
                            <div className={styles.max} onClick={()=>setColor({max:true})} style={{backgroundColor: color.max ?"white" :"transparent"}}><img src={max} alt="max"  />  <Link  style={{textDecoration:"none",color:"black"}} to="/" >بیشترین رشد</Link></div>
                            <div className={styles.min} onClick={()=>setColor({min:true})} style={{backgroundColor: color.min ?"white" :"transparent"}} >< img src={min} alt="min" /> <Link style={{textDecoration:"none",color:"black"}} to="/min">بیشترین کاهش</Link></div>
                         </div>
                    </div>

                 </div>


                 <div className={styles.bottom}>
                    <div className={`d-flex justify-content-around ${styles.header}`}>
                        <span className='col-1 col-md-2'>ارز دیجیتال </span>
                        <span className='col-1 col-md-2'>قیمت خرید </span>
                        <span className='col-1 col-md-2'>قیمت فروش </span>
                        <span className='col-1 col-md-2'>تغیررات</span>
                    </div>
                    <div className={styles.body}>
                     <div>
                      {
                      <Routes>
                        <Route path="/" element={  tableData.map(item => <Max key={item.id}  data={item} />)} />
                        <Route path="/min" element={  tableData.map(item => <Min key={item.id}  data={item} />)} />
                      </Routes>
                      }
                     </div>
                    </div>
                 </div>
                 

            </div>
        </div>
    );
};

export default Instant;