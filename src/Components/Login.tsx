import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ReactDOM } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate= useNavigate();
    const [FormData,setState] = useState({
        Email: "",
        Password:""
});
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(FormData)

        if(FormData.Email==="admin@gmail.com"&& FormData.Password==="1234"){
            navigate('/ViewMenu')
        }

    }
  return (
    
    <Form  className="formContainer" onSubmit={handleSubmit}>
      <Form.Group className="formField" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={FormData.Email}
        onChange={(e)=> setState({ ...FormData, Email: e.target.value })}/>
        
      </Form.Group>

      <Form.Group className="formField" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password"
        value={FormData.Password}
        onChange={(e)=> setState({ ...FormData, Password: e.target.value })} />
        
      </Form.Group>
      
      <Button className="submitButton" variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;