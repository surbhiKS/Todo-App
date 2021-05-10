import React from 'react';
import ReactDOM from 'react-dom';

let c=0;let max=0;
function NumberList(props) {
  const numbers = props.numbers;
  
  for(let i=0;i<=n;i++)
{
    if(numbers[i]!==i) 
    {
      return(numbers[i]);  
      break;   
    }
       
  }
  
  return (max);
}
 let n=101;
 const numbers =[]

 for(let i=0;i<=n;i++)
 {
  numbers [i]=prompt('enter');
 }



ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);