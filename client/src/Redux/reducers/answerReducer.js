import {
    SEND_ANSWER,
     GET_ANSWER,
     FAIL_ANSWER,
     LOAD_ANSWER
   }
   from '../constants/actionTypes'

const initialState={
errors:[],
answer:{},
data:[]
}
const AnswerReducer = (state = initialState, { type, payload })=>{
    switch (type) {
    case LOAD_ANSWER:
        return { ...state, loadAnswer: true }
    case SEND_ANSWER:
      return {
        ...state,
        loadAnswer: false,
        answer: payload.answer,
      };
    case GET_ANSWER:
      return {
        ...state,
        loadAnswer: false,
        data: payload.data,
      };
    case FAIL_ANSWER:
      return { ...state, loadAnswer: false, errors: payload };
      default:
        return state;
}
}
export default AnswerReducer