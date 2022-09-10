import React,{useState} from 'react';

function Add() {
  const[input,setInput]=useState('');
  const[review,setReview]=useState('');
  const[data,setData]=useState([
{
    id:1,
    name:'abc',
    skill:'sleep'
},
{
  id:2,
  name:'def',
  skill:'eat'
}
]);
// setData([...data,{id:data[data.length-1], name:input,skill:review}]);
  return (
    <div>{
      data.map(d=><h2>{d.id}.{d.name}<br/>{d.skill}</h2>)}

    </div>
  )
}

export default Add;