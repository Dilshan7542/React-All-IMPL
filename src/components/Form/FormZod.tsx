
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';
import { FieldValues, useForm } from 'react-hook-form'
import {z} from 'zod';
// dependency => npm i react-hook-form
// dependency => npm i zod@3.20.6
// dependency => npm i @hookform/resolvers@2.9.11 (consider error mesages for zod)
// validation
const schema=z.object({
    name:z.string().min(3,{message:"Plase Enter Min 3 Charactor"}),
    age:z.number({invalid_type_error:"Age is required!"}).min(18).max(100)
});
type FormData=z.infer<typeof schema>;
const FormZod = () => {
    const {register,handleSubmit,formState:{errors,isValid}} =useForm<FormData>({resolver:zodResolver(schema)});

   
    const submitValue=(data:FieldValues)=>{
            console.log(data); 
    }
  return (
    <form className='w-100' onSubmit={handleSubmit(submitValue)}>
    <div className="mb-3 w-25">
      <label htmlFor="name" className="form-label">Name</label>
      <input {...register('name')} type="text"   className="form-control" id="name" />
      {errors.name && <p className='text-danger'>{errors.name.message}</p>}
    </div>
    <div className="mb-3 w-25">
      <label htmlFor="age" className="form-label">Age</label>
      <input {...register('age',{valueAsNumber:true})} type="number" className="form-control" id="age" />
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}
    </div>
    <div className="mb-3 w-25">
      <input type="submit" disabled={!isValid}  className="btn btn-primary" id="btnSubmit" />
    </div>
  </form>
  )
}

export default FormZod
