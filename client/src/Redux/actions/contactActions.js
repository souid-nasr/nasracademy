import axios from "axios";
import {
 SEND_FORM,
  GET_FORM,
  FAIL_FORM,
  LOAD_FORM
}
from '../constants/actionTypes';
export const sendContactForm = (contactForm) => async (dispatch) => {
    dispatch({
      type: LOAD_FORM,
    });
    try {
      let res = await axios.post("/api/contact", contactForm);
      dispatch({
        type: SEND_FORM,
        payload: res.data,
      });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_FORM,
        payload: errors,
      });
    }
  };

  //Get All
    export const allContactForms = () => async (dispatch) => {
      dispatch({
        type: LOAD_FORM,
      });
      try {
        let res = await axios.get("/api/contact");
        dispatch({
          type: GET_FORM,
          payload: res.data, 
        });
      } catch (error) {
        const { errors } = error.response.data
        dispatch({
          type: FAIL_FORM,
          payload: errors,
        });
      }
    };
  
  //Delete contact Form
  export const deleteContactForm = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`/api/contact/${id}`);
      dispatch(allContactForms());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_FORM,
        payload: errors,
      });
    }
  };