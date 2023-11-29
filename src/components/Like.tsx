import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const Like = () => {
   const [isSelect,setSelect] =useState(true);
   const toggle=()=>{
    setSelect(!isSelect);
   }
  return (
    <div>
 {isSelect ? <FaHeart color='red' size="40px" onClick={toggle} />
 :<CiHeart color='red' size="40px" onClick={toggle} />}
    </div>
  )
}

export default Like
