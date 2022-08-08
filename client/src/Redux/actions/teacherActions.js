//import axios
import axios from "axios"
//import action-types
import {
    REGISTER_TEACHER, 
    LOGIN_TEACHER, 
    GET_TEACHER,
    ALL_TEACHERS,
    AUTH_TEACHER,
    LOAD_TEACHER,  
    LOGOUT_TEACHER,
    TEACHER_FAIL} from "../constants/actionTypes.js"

//register the Teacher
export const registerTeacher = (newTeacher, history) => async(dispatch) => {
    dispatch({
        type: LOAD_TEACHER
    })
    try {
        let res = await axios.post('/api/teachers/register', newTeacher)
        dispatch({
            type: REGISTER_TEACHER,
            payload: res.data 
        })
        history.push("/auth-teacher")

    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: TEACHER_FAIL,
            payload: errors
        })
    }
}
//sign in the Teacher
export const loginTeacher = (teacher, history) => async(dispatch) => {
    dispatch({
        type: LOAD_TEACHER
    })
    try {
        let res = await axios.post('/api/teachers/login', teacher)
        dispatch({
            type: LOGIN_TEACHER,
            payload: res.data
        })
        history.push("/auth-teacher")
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: TEACHER_FAIL,
            payload: errors
        })
    }
}
export const authedTeacher= () => async(dispatch) => {
  dispatch({
      type: LOAD_TEACHER
  })
  try {
      const config = {
          headers:{
              authTeacherToken: localStorage.getItem('teacherToken')
          }
      }
      let res = await axios.get("/api/teachers/auth-teacher", config)
      dispatch({
          type: AUTH_TEACHER,
          payload: res.data
      })
  } catch (error) {
      const {errors} = error.response.data
      dispatch({
          type: TEACHER_FAIL,
          payload: errors
      })
  }
}
//logout user
export const logoutTeacher = () => {
    return {
        type: LOGOUT_TEACHER
    }
}

//Get Teacher
export const getTeacher = (id) => async (dispatch) => {
    try {
      let res = await axios.get(`/api/teachers/${id}`);
      dispatch({
        type: GET_TEACHER,
        payload: res.data, 
      });
    } catch (error) {
      //const { errors } = error.response.data;
      console.log("Error")
      dispatch({
        type: TEACHER_FAIL,
        //payload: errors,
      });
    }
  };
//Delete Teacher
export const deleteTeacher = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`/api/teachers/${id}`);
      dispatch(getTeacher());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: TEACHER_FAIL,
        payload: errors,
      });
    }
  };
//Edit Teacher
export const editTeacher = (id,updatedTeacher) => async (dispatch) => {
    try {
      let res = await axios.put(`/api/teachers/${id}`,updatedTeacher);
      dispatch(getTeacher());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: TEACHER_FAIL,
        payload: errors,
      });
    }
  }

  //all Teachers
  export const allTeachers = () => async (dispatch) => {
    try {
      let res = await axios.get("/api/teachers/all");
      dispatch({
        type: ALL_TEACHERS,
        payload: res.data, //{comment}
      });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: TEACHER_FAIL,
        payload: errors,
      });
    }
  };