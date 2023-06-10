import React,{useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from 'axios'
import {Login as login} from '../redux/AuthSlice';
import {useSelector,useDispatch} from 'react-redux'
import { Link} from "react-router-dom";


export default function LoginForm() {
  const dispatch=useDispatch()
 const ref=useRef(null)
 const [uname,SetUname]=useState(null)
 const [pwd,SetPwd]=useState(null)
    const submitHandler = (e) => {
        e.preventDefault();
        const element = ref.current;
        element.reset()
       Login(uname,pwd,dispatch)
    }
  return (
   <div>

<Form ref={ref} onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>USER NAME</Form.Label>
        <Form.Control type="text" placeholder="ENTER USER NAME" onChange={(e)=>SetUname(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>SetPwd(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>

<Link to='/register'>Register here</Link>

   </div>
    
  )
}


function Login(uname,pwd,dispatch){
 
let payload={
  "uname":uname,
  "pwd":pwd
}

api.post("http://192.168.21.45:3000/login",payload)
.then(res=>{

  localStorage.setItem("token",res.data.usertocken)
  dispatch(login(res.data.usertocken))
})
.catch(error=>{
  if (error.response.status===401){
    alert("invalid credentials")
  }
})
}