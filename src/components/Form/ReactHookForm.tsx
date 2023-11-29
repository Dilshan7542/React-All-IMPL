
import { FieldValues, useForm } from 'react-hook-form'

// dependency => npm i react-hook-form
// dependency => npm i zod@3.20.6
// validation
interface FormData{
    name:string;
    age:number;
}
const ReactHookForm = () => {
   const {register,handleSubmit,formState:{errors}} =useForm<FormData>();

   
    const submitValue=(data:FieldValues)=>{
            console.log(data);
            
    }
   
  return (
    <form className='w-100' onSubmit={handleSubmit(submitValue)}>
    <div className="mb-3 w-25">
      <label htmlFor="name" className="form-label">Name</label>
      <input {...register('name',{required:true,min:3})} type="text"   className="form-control" id="name" />
      {errors.name?.type=='required' && <p className='text-danger'>Name Required</p>}
      {errors.name?.type=='min' && <p className='text-danger'>Plase Enter Min 3 Charactor</p>}
    </div>
    <div className="mb-3 w-25">
      <label htmlFor="age" className="form-label">Age</label>
      <input {...register('age',{required:true})} type="number" className="form-control" id="age" />
      {errors.age?.type=='required' && <p className='text-danger'>Age Required</p>}
    </div>
    <div className="mb-3 w-25">
      <input type="submit"  className="btn btn-primary" id="btnSubmit" />
    </div>
  </form>
  )
}

export default ReactHookForm
