import React, { useState } from 'react'; 
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'; 
import { Link } from 'react-router-dom';

import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png'; // Make sure to import the user icon

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' }); // Initialize with empty strings

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = e => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', credentials);
    // Example: You can call an API to log in the user
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className="m-auto">
            <div className="login__container d-flex justify-content-between"> 
              <div className="login__img">
                <img src={loginImg} alt="Login" /> 
              </div>
              <div className="login__form">
                <div className="user"> 
                  <img src={userIcon} alt="User  Icon" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}> 
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">Login</Button>
                </Form>
                <p>Don't have an account? <Link to="/register">Create a New Account?</Link></p> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;