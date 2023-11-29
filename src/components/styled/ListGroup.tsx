import {useState } from "react";
import styled from "styled-components";

interface Props{
    item:string[];
    headding:string;
    onSelectItem:(key:string,item:string)=>void;
}
interface ListItemProps{
    active:boolean;
}
function ListGroup({item,headding,onSelectItem}:Props){
        
     const List=  styled.ul`

       list-style:none;
       `;
      const ListItem= styled.li<ListItemProps>`
       padding:5px 0;
       background-color:${props => props.active ? "blue":"none"};
       cursor:pointer;
       `;
      const [selectIndex,setSelectIndex] = useState(0);

    
return (  <>
    <h1>{headding}</h1>
<List>
    {item.map((m,index) =><ListItem 
    active={index===selectIndex}
        onClick={
            ()=>{
                setSelectIndex(index);
                onSelectItem(index.toString(),m);
            }
        } key={index}>{m}</ListItem>)}
</List></>
);
}

export default ListGroup;