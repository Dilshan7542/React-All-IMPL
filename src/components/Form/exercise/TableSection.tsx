

interface Expenses{
  id:number;
  category:string;
  dis:string;
  qty:number;
  amount:number;
}

interface TabelProps{
  expenses:Expenses[];
  onAction:(id:number)=> void;
}

const TableSection = ({expenses,onAction}:TabelProps) => { 
  if(expenses.length==0)return null;
  return (
    <div className="mt-5 w-100">
    <table className="table">
  <thead className="table-dark">
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Discription</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {expenses.map(m =><tr key={m.id}>
      <td>{m.id}</td>
      <td>{m.dis}</td>
      <td>{m.qty}</td>
      <td>{m.amount}</td>
     <td><button className="btn btn-outline-danger" onClick={()=> onAction(m.id)}>Delete</button></td>
    </tr>
    )}
  </tbody>
  <tfoot className="table-info">
    <tr>
      <th>Amount</th>
      <th></th>
      <th></th>
      <th>{expenses.reduce((acc,exp)=> acc+exp.amount,0)}</th>
      <th></th>
    </tr>
  </tfoot>
</table>  
    </div>
  )
}

export default TableSection
