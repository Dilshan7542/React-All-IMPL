import {useState } from "react";
import styles from "./ListGroup.module.css";

interface Props{
    item:string[];
    headding:string;
    onSelectItem:(key:string,item:string)=>void;
}
function ListGroup({item,headding,onSelectItem}:Props){
        
       
      const [selectIndex,setSelectIndex] = useState(-1);
    
    
return (  <>
    <h1>{headding}</h1>
<ul className={[styles['list-group'],styles.container].join(" ")}>
    {item.map((m,index) =><li className={selectIndex===index 
        ? "list-group-item active"
        :"list-group-item"} 
        onClick={
            ()=>{
                setSelectIndex(index);
                onSelectItem(index.toString(),m);
            }
        } key={index}>{m}</li>)}
</ul></>
);
}

export default ListGroup;