import React, { useEffect, useState } from 'react';
import"./style.css";

//use effect hooks chai title aauni thau ma browser ko aaucha like chats(1).... 
const UseEffect = () => {
    const [myNum,setmyNum]=React.useState(10);
    useEffect(()=>{
        document.title =`chats(${myNum})`

    },);
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={()=>setmyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
     
      </div>
    </>
  )
}

export default UseEffect;
