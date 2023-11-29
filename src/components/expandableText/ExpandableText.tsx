import { ReactNode, useState } from 'react';

interface Props{
    textLength:number;
    children:ReactNode;
}
const ExpandableText = ({children,textLength}:Props) => {
         const [length,setLength]  = useState(true);
         const wideText=()=>{
            setLength(!length);
         }
  return (
    <>
    <p>
      {
      length ? children?.toString().substring(0,textLength):children
      }
    {length && <button onClick={wideText}>More</button>}
    {!length && <button onClick={wideText}>less</button>}
    </p>
    </>
  )
}

export default ExpandableText
