//import axios
import axios from "axios";
import {
  ADD_COURSE ,
  LOAD_COURSE ,
  FAIL_COURSE ,
  GET_COURSE ,
} from '../constants/actionTypes'

//Addcourse
export const addCourse = (newCourse) => async (dispatch) => {
  dispatch({
    type: LOAD_COURSE,
  });
  try {
    let res = await axios.post("/api/courses", newCourse);
    dispatch({
      type: ADD_COURSE,
      payload: res.data, 
    });
    dispatch(allCourses());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_COURSE,
      payload: errors,
    });
  }
};
//Get All
export const allCourses = () => async (dispatch) => {
  dispatch({
    type: LOAD_COURSE,
  });
  try {
    let res = await axios.get("/api/courses");
    dispatch({
      type: GET_COURSE,
      payload: res.data, 
    });
  } catch (error) {
    const { errors } = error.response.data
    dispatch({
      type: FAIL_COURSE,
      payload: errors,
    });
  }
};
//Delete
export const deleteCourse= (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/courses/${id}`);
    dispatch(allCourses());
  } catch (error) {
    const { errors } = error.res.data;
    dispatch({
      type: FAIL_COURSE,
      payload: errors,
    });
  }
};
//Edit
export const editCourse = (id,updatedCourse) => async (dispatch) => {
  try {
    let res = await axios.put(`/api/courses/${id}`,updatedCourse);
    dispatch(allCourses());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_COURSE,
      payload: errors,
    });
  }
};
