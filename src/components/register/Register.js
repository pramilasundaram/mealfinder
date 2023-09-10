import React from 'react'
import "./register.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Card, CardText, CardHeader, CardBody, FormGroup, Label, Input, Button } from "reactstrap"
export default function Register() {
  const nav = useNavigate();
  const [formdata, seFromdata] = useState({
    username:'',
    email:'',
    password:''
  })
  const handleChange = (e) => {
    seFromdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
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
          <h1>Register</h1>
        </CardHeader>
        <CardBody>
          <CardText>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label
                  for="username"
                  hidden
                >
                  username
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
                  for="Email"
                  hidden
                >
                  Email
                </Label>
                <Input
                  id="Email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formdata.email}
                  onChange={handleChange}
                />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label
                  for="Password"
                  hidden
                >
                  Password
                </Label>
                <Input
                  id="Password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={formdata.password}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button color="primary">
                Register  </Button>
            </Form>
            <Button color="primary" onClick={() => nav('/')}>
              login  </Button>
          </CardText>
        </CardBody>
      </Card>
    </div>

  )
}
