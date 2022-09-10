import React,{useState} from 'react'

function Form() {
  const[data,setData]=useState('');
  const[skill,setSkill]=useState('');
  const[submit,setSubmit]=useState(false);
  const hanldechange=(e)=>{
    setData(e.target.value)
  }
  const hanldechanged=(e)=>{
    setSkill(e.target.value)
  }
  const handlesubmit=()=>{
    setSubmit({submit:true})


  }
  return (
    <div>
      <h2>Registration Form</h2>
      <label>Enter the Name</label>
      <input type='text' value={data} onChange={hanldechange} /><br/>
      <label>Enter the skill </label>
      <input type='text' value={skill} onChange={hanldechanged}/>
      <button onClick={handlesubmit}>submit </button>
{submit && <h2>name is {data}</h2> }      

      
      </div>
  )
}

export default Form