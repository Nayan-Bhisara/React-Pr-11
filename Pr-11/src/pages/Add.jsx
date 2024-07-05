import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addData} from "../action/action"

const Add = () => {

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [company,setCompany] = useState("")
    const [massage,setMassege] = useState("")
    const dispatch = useDispatch()


    const handleSubmit =(e)=>{
      e.preventDefault()

      let obj = {
        id : Date.now(),
        name:name,
        phone:phone,
        email:email,
        company:company,
        massage:massage
      }
      dispatch(addData(obj))
      setName("")
      setPhone("")
      setEmail("")
      setCompany("")
      setMassege("")
    }

  return (
    <div align="center">
        <div className='box'>
            <h2>Contact Form</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className='input' placeholder='Enter Full Name' onChange={(e)=>setName(e.target.value)} value={name}/> <br/>
                <input type="number" className='input' placeholder='Contact Number' onChange={(e)=>setPhone(e.target.value)} value={phone}/> <br/>
                <input type="email" className='input' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/> <br/>
                <input type="text" className='input' placeholder='Enter Company Name' onChange={(e)=>setCompany(e.target.value)} value={company}/><br/> 
                <input type="text-area" className='inputm' placeholder='Enter Youre Massage' onChange={(e)=>setMassege(e.target.value)} value={massage}/><br/>
                <input className='inputs' type="submit" /> 
            </form>
        </div>
    </div>
  )
}

export default Add