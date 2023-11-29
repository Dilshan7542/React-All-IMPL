import { useState } from 'react';
import './App.css';
import FormZod from './components/Form/FormZod';
import FormExercise from './components/Form/exercise/FormExercise';

function App() {
 
    const [card,setCard]= useState({
        dis:.1,
        items:[
          {id:1,title:"Product1",qty:1},
          {id:1,title:"Product1",qty:1}
        ]
      });
      
    const test=()=>{
        setCard({...card,items:card.items.map(m => m.id==1 ? {...m,qty:m.qty+1}:{...m})});
        console.log(card);
      }
    
  return (
    <>
    <main className='vw-100 vh-100'>
    <FormExercise />
    </main>
    </>
  )
}

export default App;
