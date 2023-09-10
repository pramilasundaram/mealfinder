import React from 'react';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Form,Card,CardText,CardHeader,CardBody,FormGroup,Label,Input,Button} from "reactstrap";
export default function Login() {
  const nav=useNavigate();
  const [formdata,seFromdata]=useState({
    username:'',
    password:''    
  })
  const handleChange=(e)=>{
    seFromdata({...formdata,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
e.preventDefault();
const data=await fetch('http://localhost:8000/demo',{
  method:'POST',
  body:JSON.stringify(formdata),
  headers:{'Content-Type':'application/json'}
})
const response=await data.json()
console.log(response)
}
  
  return (
    <div className='loginpage m-4'>
    <Card
  className="my-2"
  style={{
    width: '30rem'
  }}
>
  <CardHeader>
  <h1>Login</h1> 
  </CardHeader>
  <CardBody>
    <CardText>
    <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label
        for="username"
        hidden
      >
        Username
      </Label>
      <Input
        id="username"
        name="username"
        placeholder="username"
        type="text"
        value={formdata.username}
        onChange={handleChange}
      />
    </FormGroup>
    
    <FormGroup>
      <Label
        for="examplePassword"
        hidden
      >
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        value={formdata.password}
        onChange={handleChange}
      />
    </FormGroup>
    <Button color="primary">Login</Button>        
  </Form>
  <p>new user?</p>    
    <Button color="primary" onClick={()=>nav('/register')}>Register</Button> 
    </CardText>    
  </CardBody>  
</Card>
  </div>    
  )
}
