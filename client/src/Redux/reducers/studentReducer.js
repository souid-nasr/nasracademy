//1-import actions-types
import {
  REGISTER_STUDENT,
  GET_STUDENT,
  ALL_STUDENTS, 
  LOGIN_STUDENT, 
  LOAD_STUDENT,  
  AUTH_STUDENT,
  LOGOUT_STUDENT,
  STUDENT_FAIL,
  
} from "../constants/actionTypes";

//2-initial state
const initialState = {
  student: {},
  errors: [],
  loadStudent: false,
  isAuthStudent: false,
  data: [],
};

//3-create the pure function and export it
const StudentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_STUDENT:
      return { ...state, loadStudent: true };
    case REGISTER_STUDENT:
    case LOGIN_STUDENT:
      localStorage.setItem("studentToken", payload.studentToken);
      return {
        ...state,
        loadStudent: false,
        isAuthStudent: true,
        student: payload.student,
      };
    case AUTH_STUDENT:
      return {
        ...state,
        loadStudent: false,
        isAuthStudent: true,
        student: payload.student,
      };
    case GET_STUDENT:
      return {
        ...state,
        loadStudent: false,
        data: payload.data,
        student: payload.student,
      };
      case ALL_STUDENTS:
        return {
          ...state,
          loadStudent: false,
          data: payload.data,
        };
    case STUDENT_FAIL:
      return {
        ...state,
        loadStudent: false,
        isAuthStudent: false,
        errors: payload,
      };
    case LOGOUT_STUDENT:
      localStorage.removeItem("studentToken");
      return {
        ...state,
        student: {},
        errors: [],
        loadStudent: false,
        isAuthStudent: false,
      };
    default:
      return state;
  }
};

export default StudentReducer;
