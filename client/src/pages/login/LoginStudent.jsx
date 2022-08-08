import './login.scss'
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginStudent} from "../../Redux/actions/studentActions"
import {Link}from 'react-router-dom'


const LoginStudent = ({history}) => {
    const [student, setStudent] = useState({})

    const handleChange = (e) => {
      e.preventDefault()
        setStudent({...student, [e.target.name] : e.target.value })
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
              <button className="registerButton">            
              <Link
                    to="/register-student"
                    style={{ color: "white" ,textDecoration:"none"}}
                  >
            Register
          </Link>
          </button>
            </div>
          </div>
          <div className="container">
            <form>
              <h1>Login Student</h1>
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {errors && errors.map(el => <p> {el.msg} </p>) }
              <button className="loginButton" onClick={() => dispatch(loginStudent(student, history))} >
          <Link
                    to="/auth-student"
                    style={{ color: "white" ,textDecoration:"none"}}
                  >
            Login
          </Link>
              </button>
            </form>
          </div>
        </div>
      );
    }
    
    export default LoginStudent