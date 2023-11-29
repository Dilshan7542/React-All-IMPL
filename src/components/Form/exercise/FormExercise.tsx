import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useState } from "react";
import TableSection from "./TableSection";
import category from "../../constant/Category";
const schema = z.object({
  category: z.enum(category, {
    errorMap:()=> ({message:"Category is Required!!"})
  }),
  discription: z.string().min(2),
  qty: z.number({invalid_type_error:"amout is required!"}).default(0),
  amount: z.number().default(0),
});
type FormData = z.infer<typeof schema>;

const FormExercise = () => {
  const { register, handleSubmit,reset, formState:{errors,isValid} } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  
  const [expenses, setExpensesList] = useState([
    {id:1, category:category[0],dis:"Hal",qty:4,amount:50.0},
    {id:2, category:category[0],dis:"Hal",qty:5,amount:60.0},
    {id:3, category:category[0],dis:"Hal",qty:1,amount:70.0},
    {id:4, category:category[1],dis:"Cat",qty:5,amount:80.0},
    {id:5, category:category[1],dis:"Dog",qty:8,amount:15.0},
    {id:6, category:category[1],dis:"Lion",qty:5,amount:90.0},
  ]);
   const [selectCategory,setSelcetCategoey]= useState("All-Category");
  const onSubmit=(data:FieldValues)=>{
       reset();
      setExpensesList([...expenses,
        {id:expenses.length, category:data.category,dis:data.discription,qty:data.qty,amount:data.amount}]);

  }
  const visibleExpenses= selectCategory.startsWith("All") ? expenses
  :selectCategory ? expenses.filter(e => e.category== selectCategory):expenses;

  return (
    <>
      <section className="w-100 row justify-content-center align-items-center flex-column min-vh-100 row-gap-2 pt-5">
        <section className="row w-75 justify-content-center h-75 align-content-end">
          <form
            className="row w-75  border border-dark rounded-2 border-opacity-25 h-75 align-content-center p-2 pt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <label htmlFor="categoryID" className="form-label fw-bold">
                Category
              </label>
              <select
                {...register("category")}
                className="form-select"
                aria-label="Default select example"
                id="categoryID"
              >
                { category.map(m=> <option>{m}</option>)}
            
              </select>
              {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="discription" className="form-label fw-bold">
                Discription
              </label>
              <input
                {...register("discription")}
                type="text"
                className="form-control"
                id="discription"
              />
               {errors.discription && <p className="text-danger mt-1">{errors.discription.message}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="qty" className="form-label fw-bold">
                Qty
              </label>
              <input
                {...register("qty", { valueAsNumber: true })}
                type="number"
                className="form-control"
                id="qty"
              />
                 {errors.qty && <p className="text-danger mt-1">{errors.qty.message}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label fw-bold">
                Amount
              </label>
              <input
                {...register("amount", { valueAsNumber: true })}
                type="number"
                className="form-control"
                id="amount"
              />
                   {errors.amount && <p className="text-danger mt-1">{errors.amount.message}</p>}
            </div>

            <div className="mb-3 w-25">
              <input type="submit" disabled={!isValid} className="btn btn-primary" id="btnSubmit" />
            </div>
          </form>
        </section>

        <section className="row w-75 justify-content-center h-75 align-content-end pt-2">
          <select className="form-select w-auto fs-5 pe-5 ps-5 fw-bold" onChange={(event)=>setSelcetCategoey(event.target.value)}>
            <option>All-Category</option>
            {category.map((m) => (
              <option value={m}>{m}</option>
            ))}
          </select>
        </section>

        <section  className="row w-75 justify-content-center align-align-content-center pt-2">
          <TableSection expenses={visibleExpenses} 
           onAction={(e)=> setExpensesList(expenses.filter(m=> m.id!==e))}></TableSection>
        </section>
      </section>
    </>
  );
};

export default FormExercise;
