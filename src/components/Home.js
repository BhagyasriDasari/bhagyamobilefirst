import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import"./Home.css"

const Home = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    });

    const [data, setData] = useState([]); // Define data state

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            alert('Name field is required!');
        } else if (email === "") {
            alert('Email field is required');
        } else if (!email.includes("@")) {
            alert('Please enter a valid email address');
        } else if (date === "") {
            alert('Date field is required');
        } else if (password === "") {
            alert('Password field is required');
        } else if (password.length < 5) {
            alert('Password length must be at least five characters');
        } else {
            console.log("Data added successfully");
            history("/login");
            setData(prevData => [...prevData, inpval]); // Update data state
            localStorage.setItem("uniqueUser", JSON.stringify([...data, inpval]));
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
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

export default Home;