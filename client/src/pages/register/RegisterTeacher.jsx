import './register.scss'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerTeacher} from "../../Redux/actions/teacherActions"
import {Link} from "react-router-dom"

const RegisterTeacher = ({history}) => {
    const [newTeacher, setNewTeacher] = useState({})

    const handleChange = (e) => {
      e.preventDefault()
        setNewTeacher({...newTeacher, [e.target.name] : e.target.value})
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
          <button className="loginButton">
          <Link
                    to="/login-teacher"
                    style={{ color:"white", textDecoration:"none"}}
                  >
            Log In
          </Link>
          </button>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Register Teacher</h1>
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
          <button className="loginButton" onClick={() => dispatch(registerTeacher(newTeacher, history))} >
          <Link
                    to="/auth-teacher"
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

export default RegisterTeacher