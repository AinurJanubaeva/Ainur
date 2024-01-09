import React, { useState } from 'react'

export const Dom = (props) => {
  
  const [name,setName]=useState('')
  console.log(name);

    const user = {
      name:name
    }
    const nameHandler=(e)=>{
      setName(e.target.value)
    }

    
        const clikc=()=>{
          props.onSave(user)
        }

        console.log(name);
    return (
      <div>
        <input onChange={nameHandler} type="text" />
        <button onClick={clikc}>Add</button>
    </div>
  )
}


