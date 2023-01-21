import React ,{useState , useRef } from 'react';

// components
import List from './List';
import ListB from './ListB';

// data
import { listData } from '../data/listData';


// styles
import "../styles/main.css"
import styles from "../styles/firstPage.module.css"
import * as Icon from 'react-bootstrap-icons';

// images
import logo from "../images/logo.webp"

const FirstPage = () => {
  const ref=useRef(null);
  const refB=useRef(null);
  const [show , setShow]=useState(false);
  const [showB ,setShowB]=useState(false);
  const [search , setSearch] =useState("")
  const clickHandler =()=>{
    setShow(!show);
  }
  const clickHandlerB =()=>{
    setShowB(!showB)
  }

  const searchHandler=(ev)=>{
    setSearch(ev.target.value)
  }
  const searchedCoins=listData.filter(item =>{
    return item.name.includes(search)
  })


  const setValue=(ev,id)=>{
    const myImg=listData.find(item =>{
       return item.id ===id ?item.img :null
    })
    const myName=listData.find(item=>{
       return item.id === id ?item.name :null
    })
    const myDesc=listData.find(item =>{
       return item.id === id ?item.desc :null
    })
    const shorten=myDesc.desc.toString().split(" ");
    

   
   
    ref.current.innerHTML=`<img src=${require('../images/'+myImg.img+'.webp')} alt='img' /> 
    <span>${myName.name}</span>   
    (<span>${shorten[0]}</span>)`
    setShow(!show);

  }
 


  const setValueB=(ev , id)=>{
    const myImgB=listData.find(item =>{
      return item.id ===id ?item.img :null
   })
   const myNameB=listData.find(item=>{
      return item.id === id ?item.name :null
   })
   const myDescB=listData.find(item =>{
      return item.id === id ?item.desc :null
   })
   const shortenB=myDescB.desc.toString().split(" ");
  
   refB.current.innerHTML=`<img src=${require('../images/'+myImgB.img+'.webp')} alt='img' /> 
   <span>${myNameB.name}</span>   
   (<span>${shortenB[0]}</span>)`
   setShowB(!showB);
 }
    return (
        <div className={`col-12 d-flex justify-content-center align-items-center ${styles.firstParent}`}>
          <div className={`d-flex flex-column align-items-center  col-12 ${styles.parent}`}>
          <div className={`col-4 ${styles.logoParent}`}>
             <img className={styles.logo} src={logo} alt="logo"/>
          </div>

          <div className='container  d-flex justify-content-center'>
            <div className={`col-12 col-lg-7 ${styles.searchParent}`}>
                <div className={`${styles.head}`}></div>
                <div className={` ${styles.body}`}>
                    <div className={`d-flex flex-wrap justify-content-center align-items-center ${styles.innerParent}`}>
                    
                        <div onClick={clickHandler} className={`d-flex flex-wrap justify-content-center  align-items-center col-md-3 col-6 ${styles.choose}`}>
                           <p>انتخاب ارز</p>
                           <div ref={ref} className={`${styles.text} `}></div>
                        </div>
                        

                        <div onClick={clickHandlerB}  className={`d-flex flex-wrap justify-content-center align-items-center col-md-3 col-6 ${styles.choose}`}>
                           <p>انتخاب ارز</p>
                           <div ref={refB} className={`${styles.text}`}></div>
                       </div>
                       <div className={`d-flex flex-wrap justify-content-center align-items-center col-md-3 col-6 ${styles.choose}`}>
                           <p> قیمت</p>
                           <div className={styles.text}></div>
                       </div>

                    
                    </div>
                      <button className={`${styles.btn}`}>خرید ارز</button>
                      
                    </div>

                    
                </div>
            </div>
          {/* chevron */}
                <div className={`${styles.chevron}`}></div>
                <div className={`${styles.chevronTwo}`}></div>
          </div>
          {/* list */}

            <div className={`col-12 col-lg-4 ${styles.list}`}   style={{display:show?"block" :"none"}}>
              <div className='container'>
                <div  className={`d-flex justify-content-end`}  ><Icon.X onClick={clickHandler} size={33}/></div>
                <div className={` ${styles.searchPlace}`}>
                   <Icon.Search /><input type="text" placeholder='جست و جو ' value={search} onChange={searchHandler} />
                </div>
                  {
                     searchedCoins.map((item)=>{
                            return <List  key={item.id} func={(ev ,id)=>setValue(ev ,id)} click={clickHandler} data={item} />
                     })
                  }
                </div>
            </div>
            <div className={`col-8 col-lg-4 ${styles.listB}`}   style={{display:showB?"block" :"none"}}>
              <div className='container'>
                <div  className={`d-flex justify-content-end`}  ><Icon.X onClick={clickHandlerB} size={33}/></div>
                <div className={` ${styles.searchPlace}`}>
                   <Icon.Search /><input type="text" placeholder='جست و جو ' value={search} onChange={searchHandler} />
                </div>
                  {
                     searchedCoins.map((item)=>{
                            return <ListB  key={item.id} func={(ev ,id)=>setValueB(ev ,id)} click={clickHandlerB} data={item} />
                     })
                  }
                </div>
              </div>
           
             

            {/* underList */}
            <div className={styles.underList}  style={{display:show || showB ?"block" :"none"}}></div>
        </div>
        
    );
};

export default FirstPage;