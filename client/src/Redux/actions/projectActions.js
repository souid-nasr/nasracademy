//import axios
import axios from "axios";
import {
  ADD_PROJECT ,
  LOAD_PROJECT ,
  FAIL_PROJECT ,
  GET_PROJECT ,
} from '../constants/actionTypes'

//Add project
export const addProject = (newProject) => async (dispatch) => {
  dispatch({
    type: LOAD_PROJECT,
  });
  try {
    let res = await axios.post("/api/projects", newProject);
    dispatch({
      type: ADD_PROJECT,
      payload: res.data, 
    });
    dispatch(allProjects());
  } catch (error) {
    const { errors } = error.res.data;
    dispatch({
      type: FAIL_PROJECT,
      payload: errors,
    });
  }
};
//Get All
export const allProjects = () => async (dispatch) => {
  dispatch({
    type: LOAD_PROJECT,
  });
  try {
    let res = await axios.get("/api/projects");
    dispatch({
      type: GET_PROJECT,
      payload: res.data, 
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_PROJECT,
      payload: errors,
    });
  }
};
// export const allCourses = () => async (dispatch) => {
//   dispatch({
//     type: LOAD_COURSE,
//   });
//   try {
//     let res = await axios.get("/api/courses");
//     dispatch({
//       type: GET_COURSE,
//       payload: res.data, 
//     });
//   } catch (error) {
//     const { errors } = error.response.data
//     dispatch({
//       type: FAIL_COURSE,
//       payload: errors,
//     });
//   }
// };
//Delete
export const deleteProject= (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/projects/${id}`);
    dispatch(allProjects());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_PROJECT,
      payload: errors,
    });
  }
};
//Edit
export const editProject = (id,updatedListCourse) => async (dispatch) => {
  try {
    let res = await axios.put(`/api/projects/${id}`,updatedListCourse);
    dispatch(allProjects());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_PROJECT,
      payload: errors,
    });
  }
};