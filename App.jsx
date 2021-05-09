import React, { useState } from 'react';

const App=()=>{

    const [inputList,setInputList]=useState("");
    const [items,setItems]=useState([1,2,3,4,5]);
 const itemEvent =(event)=>{
     const x=event.target.value;
     if((x%2)===0)
     {
    setInputList(event.target.value);
     }

 };

 const listOfItem=()=>{
    setItems((oldItems)=>{
        return[...oldItems,inputList];
    });
    setInputList("");
 };

    return(
<>
<div className='main-div'>
    <div className='center-div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type='text' placeholder='Add Todo' onChange={itemEvent} value={inputList}></input>
        <button onClick={listOfItem} > + </button>
        <ol>
            
              { items.map((itemVal)=>{
               return<li> {itemVal}</li>;
               })}
            
        </ol>
    </div>
</div>
</>

    );
};
export default App;