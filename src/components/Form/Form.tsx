import { FormEvent, useRef } from 'react';

const Form = () => {
  const nameRef= useRef<HTMLInputElement>(null);
  const ageRef= useRef<HTMLInputElement>(null);
  const person={ name:"",age:0};
  const handlSubmit=(event:FormEvent)=>{
    event.preventDefault();
      if(nameRef.current!==null)
        person.name=nameRef.current.value;
        if(ageRef.current!==null){
          person.age=parseInt(ageRef.current.value);
        }
      console.log(person);
      
  }

  return (
    <form className='w-100' onSubmit={handlSubmit}>
      <div className="mb-3 w-25">
        <label htmlFor="name" className="form-label">Name</label>
        <input ref={nameRef} type="text"   className="form-control" id="name" />
      </div>
      <div className="mb-3 w-25">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} type="number" className="form-control" id="age" />
      </div>
      <div className="mb-3 w-25">
        <input type="submit"  className="btn btn-primary" id="btnSubmit" />
      </div>
    </form>
  );
}

export default Form
