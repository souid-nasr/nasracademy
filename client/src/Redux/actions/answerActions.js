import axios from "axios";
import {
 SEND_ANSWER,
  GET_ANSWER,
  FAIL_ANSWER,
  LOAD_ANSWER
}
from '../constants/actionTypes';
export const sendAnswer = (answerForm) => async (dispatch) => {
    dispatch({
      type: LOAD_ANSWER,
    });
    try {
      let res = await axios.post("/api/answers", answerForm);
      dispatch({
        type: SEND_ANSWER,
        payload: res.data,
      });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_ANSWER,
        payload: errors,
      });
    }
  };

  //Get All
    export const allAnswers = () => async (dispatch) => {
      dispatch({
        type: LOAD_ANSWER,
      });
      try {
        let res = await axios.get("/api/answers");
        dispatch({
          type: GET_ANSWER,
          payload: res.data, 
        });
      } catch (error) {
        const { errors } = error.response.data
        dispatch({
          type: FAIL_ANSWER,
          payload: errors,
        });
      }
    };
  
  //Delete contact Form
  export const deleteAnswer = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`/api/answers/${id}`);
      dispatch(allAnswers());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: FAIL_ANSWER,
        payload: errors,
      });
    }
  };