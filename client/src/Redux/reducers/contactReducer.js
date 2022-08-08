import {
    SEND_FORM,
     GET_FORM,
     FAIL_FORM,
     LOAD_FORM
   }
   from '../constants/actionTypes'

const initialState={
errors:[],
form:{},
data:[]
}
const ContactReducer = (state = initialState, { type, payload })=>{
    switch (type) {
    case LOAD_FORM:
        return { ...state, loadForm: true };
    case SEND_FORM:
      return {
        ...state,
        loadForm: false,
        form: payload.form,
      };
    case GET_FORM:
      return {
        ...state,
        loadForm: false,
        data: payload.data,
      };
    case FAIL_FORM:
      return { ...state, loadForm: false, errors: payload };
      default:
        return state;
}
}
export default ContactReducer