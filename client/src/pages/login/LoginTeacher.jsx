import './login.scss'
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginTeacher} from "../../Redux/actions/teacherActions"
import { Link } from 'react-router-dom';

const LoginTeacher = ({history}) => {
    const [teacher, setTeacher] = useState({})

    const handleChange = (e) => {
      e.preventDefault()
        setTeacher({...teacher, [e.target.name] : e.target.value })
    }
    const errors = useSelector(state => state.TeacherReducer.errors)
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
                <Link to ='/register-teacher' style={{ color: "white" ,textDecoration:"none"}}>
                  Register                
                </Link>
              </button>
            </div>
          </div>
          <div className="container">
            <form>
              <h1>Login Teacher</h1>
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
              <button className="loginButton" onClick={() => dispatch(loginTeacher(teacher, history))} >
                <Link to ='auth-teacher' style={{ color: "white" ,textDecoration:"none"}}>
                Log In
                </Link>
                
              </button>
            </form>
          </div>
        </div>
      );
    }
    
    export default LoginTeacher