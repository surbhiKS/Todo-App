import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
let c=0;let max=0;
function NumberList(props) {
  const numbers = props.numbers;
  const n=numbers.length;
  for(let i=0;i<=n;i++)
{
    if(numbers[i]===1) 
    {
      c=c+1;
      if(c>=max)
      max=c;
      
    }
      else 
        c=0;
       
  }
  
  return (max);
}


const numbers = [0,1, 1, 0, 1, 1, 1];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);