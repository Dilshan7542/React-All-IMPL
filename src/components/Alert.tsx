import { ReactNode } from "react";

interface Props{
    children:ReactNode;
    color?:'primary'| 'secondary' | 'danger'|'success'|'warning';
    onClose:()=> void;
}

const Alert = ({children,color,onClose}:Props) => {
          
  return (
    <div className={"alert alert-dismissible fade show alert-"+color} role="alert">
        {children}
     <button type="button" className="btn-close"  data-bs-dismiss="alert" onClick={onClose} />
    </div>
  )
}

export default Alert
