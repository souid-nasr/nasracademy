//import axios
import axios from "axios"
//import action-types
import {
    REGISTER_STUDENT,
    GET_STUDENT,
    ALL_STUDENTS, 
    LOGIN_STUDENT, 
    LOAD_STUDENT,  
    AUTH_STUDENT,
    LOGOUT_STUDENT,
    STUDENT_FAIL} from "../constants/actionTypes.js"
//register the student
export const registerStudent = (newStudent, history) => async(dispatch) => {
    dispatch({
        type: LOAD_STUDENT
    })
    try {
        let res = await axios.post('/api/students/register', newStudent)
        dispatch({
            type: REGISTER_STUDENT,
            payload: res.data //{msg, student, student-token}
        })
        history.push("/login-student")

    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: STUDENT_FAIL,
            payload: errors
        })
    }
}
//sign in the student
export const loginStudent = (student, history) => async(dispatch) => {
    dispatch({
        type: LOAD_STUDENT
    })
    try {
        let res = await axios.post('/api/students/login', student)
        dispatch({
            type: LOGIN_STUDENT,
            payload: res.data
        })
        history.push("/auth-student")
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: STUDENT_FAIL,
            payload: errors
        })
    }
}

//auth user
export const authedStudent= () => async(dispatch) => {
  dispatch({
      type: LOAD_STUDENT
  })
  try {
      const config = {
          headers:{
              "authStudentToken": localStorage.getItem('token')
          }
      }
      let res = await axios.get("/api/students/auth", config)
      dispatch({
          type: AUTH_STUDENT,
          payload: res.data //{user}
      })
  } catch (error) {
      const {errors} = error.response.data
      dispatch({
          type: STUDENT_FAIL,
          payload: errors
      })
  }
}
//logout
export const logoutStudent = () => {
    return {
        type: LOGOUT_STUDENT
    }
}
//Get student
export const getStudent = (id) => async (dispatch) => {
    try {
      let res = await axios.get(`/api/students/${id}`);
      dispatch({
        type: GET_STUDENT,
        payload: res.data, 
      });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: STUDENT_FAIL,
        payload: errors,
      });
    }
  };
//Delete Student
export const deleteStudent = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`/api/students/${id}`);
      dispatch(getStudent());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: STUDENT_FAIL,
        payload: errors,
      });
    }
  };
//Edit Student
export const editStudent = (id,updatedStudent) => async (dispatch) => {
    try {
      let res = await axios.put(`/api/students/${id}`,updatedStudent);
      dispatch(getStudent());
    } catch (error) {
      const { errors } = error.data;
      dispatch({
        type: STUDENT_FAIL,
        payload: errors,
      });
    }
  };
  //all Student
  export const allStudents = () => async (dispatch) => {
    try {
      let res = await axios.get("/api/students/all");
      dispatch({
        type: ALL_STUDENTS,
        payload: res.data, 
      });
    } catch (error) {
      const { errors } = error.response.data
      dispatch({
        type: STUDENT_FAIL,
        payload: errors,
      });
    }
  };

