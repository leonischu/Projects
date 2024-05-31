import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueList = [...new Set(
  Menu.map((curEle) => {
    return curEle.category;
  })
),"All"];
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const[menuList,setMenuList]=useState(uniqueList);
  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return;
    }


    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
