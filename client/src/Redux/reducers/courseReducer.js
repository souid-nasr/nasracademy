import {
    ADD_COURSE ,
    LOAD_COURSE ,
    FAIL_COURSE ,
    GET_COURSE ,
} from '../constants/actionTypes'

const initialState = {
    errors: [],
    course: {},
    data: [],
    loadCourse: false
}
const CourseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case LOAD_COURSE:
        return { ...state, loadCourse: true };
    case ADD_COURSE:
        return { ...state, loadCourse: false, course: payload.course };
    case GET_COURSE:
        return {
        ...state,
        loadCourse: false,
        data: payload.data,
        };
    case FAIL_COURSE:
            return { ...state, loadCourse: false, errors: payload };
    default:
    return state;
}
};

export default CourseReducer;