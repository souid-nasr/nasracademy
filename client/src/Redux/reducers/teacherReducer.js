//1-import actions-types
import {
  REGISTER_TEACHER,
  LOGIN_TEACHER,
  GET_TEACHER,
  LOAD_TEACHER,
  AUTH_TEACHER,
  LOGOUT_TEACHER,
  TEACHER_FAIL,
  ALL_TEACHERS,
} from "../constants/actionTypes.js";

//2-initial state
const initialState = {
  teacher: {},
  errors: [],
  loadTeacher: false,
  isAuthTeacher: false,
  data:[]
};

//3-create the pure function and export it
const TeacherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TEACHER:
      return { ...state, loadTeacher: true };
    case REGISTER_TEACHER:
    case LOGIN_TEACHER:
      localStorage.setItem("teacherToken", payload.teacherToken);
      return {
        ...state,
        loadTeacher: false,
        isAuthTeacher: true,
        teacher: payload.teacher,
      };
      case AUTH_TEACHER:
        return {
          ...state,
          loadTeacher: false,
          isAuthTeacher: true,
          teacher: payload.teacher,
          data:[]
        };
    case GET_TEACHER:
      localStorage.setItem("teacherToken", payload.teacherToken);
      return {
        ...state,
        loadTeacher: false,
        isAuthTeacher: true,
        data: payload.data,
      };
      case ALL_TEACHERS:
        return {
          ...state,
          loadTeacher: false,
          data: payload.data,
        };
    case TEACHER_FAIL:
      return {
        ...state,
        loadTeacher: false,
        isAuthTeacher: false,
        errors: payload,
      };
    case LOGOUT_TEACHER:
      localStorage.removeItem("teacherToken");
      return {
        ...state,
        teacher: {},
        errors: [],
        loadTeacher: false,
        isAuthTeacher: false,
      };
    default:
      return state;
  }
};

export default TeacherReducer;
