import './register.scss'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerStudent} from "../../Redux/actions/studentActions"
import {Link}from 'react-router-dom'

const RegisterStudent = ({history}) => {
    const [newStudent, setNewStudent] = useState({})

    const handleChange = (e) => {
      e.preventDefault()
        setNewStudent({...newStudent, [e.target.name] : e.target.value})
    }
    const errors = useSelector(state => state.StudentReducer.errors)
    const dispatch = useDispatch()
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="/logo.png"
            alt=""
          />
          <button className="loginButton">
            <Link
                    to="/login-student"
                    style={{ color: "white" ,textDecoration:"none"}}
                  >
            Log In
          </Link>
          </button>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Register Student</h1>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
          type='password'
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors && errors.map(el => <p> {el.msg} </p>) }
          <button className="loginButton" onClick={() => dispatch(registerStudent(newStudent, history))} >
          <Link
                    to="/auth-student"
                    style={{ color: "white" ,textDecoration:"none"}}
                  >
            Register
          </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterStudent