import { useState } from 'react';
import './App.css';
import { Dom } from './components/Dom';

function App() {
  
  const arr = [
    {
      name:'Ainur',
    }
  ]
  
  const [array,setArr] = useState(arr)
  console.log(array);

  
  const save = ( data )=>{
    console.log(data);
    setArr((prev)=>[...prev,data])
    
  }
  return (
    <div className="App">
       <Dom onSave={save}/>
       {
         array.map((el)=>{
           return <h1>{el.name}</h1>
        })

       }
    </div>
  );
}

export default App;


