import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


import"./LoginForm.css"

const LoginForm = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: '',
        password: ''
    });

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem('uniqueUser');

        const { email, password } = inpval;
        if (email === '') {
            alert('Email field is required');
        } else if (!email.includes('@')) {
            alert('Please enter a valid email address');
        } else if (password === '') {
            alert('Password field is required');
        } else if (password.length < 5) {
            alert('Password length must be at least five characters');
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el) => el.email === email && el.password === password);

                if (userlogin.length === 0) {
                    alert('Invalid email or password');
                } else {
                    console.log('User login successful');
                    localStorage.setItem('user_login', JSON.stringify(userlogin));
                    history('/jokes');
                }
            }
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
                        <h3 className="text-center col-lg-6">Sign IN</h3>
                        <Form className='form-container'>
                            <Form.Group className="form-data mb-3 col-lg-6" controlId="formBasicEmail">
                                <label for="email">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <Form.Control type="email" name="email" id="email" onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="form-data mb-3 col-lg-6" controlId="formBasicPassword">
                                <label for="password">Password: &nbsp;&nbsp;&nbsp;</label>
                                <Form.Control type="password" id="password" name="password" onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button
                                variant="primary"
                                className="signin-button col-lg-6"
                                onClick={addData}
                                style={{ background: 'rgb(67, 185, 127)' }}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </div>
              
                </section>

            <div className='credentials'>
            <h2 className='credentials-heading'>Login Credentials </h2>
            <p className='credentials-para'>email: bhagya@gmail.com</p>
            <p className='credentials-para'>password: alliswell</p>
            </div>

            </div>
        </>
    );
};

export default LoginForm;