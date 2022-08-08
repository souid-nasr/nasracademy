import {
    ADD_PROJECT ,
    LOAD_PROJECT ,
    FAIL_PROJECT ,
    GET_PROJECT ,
} from '../constants/actionTypes'

const initialState = {
    errors: [],
    project: {},
    data:[],
    loadProject: false
}
const ProjectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case LOAD_PROJECT:
        return { ...state, loadProject: true };
    case ADD_PROJECT:
        return { ...state, loadProject: false, project: payload.project };
    case GET_PROJECT:
        return {
        ...state,
        loadProject: false,
        data: payload.data,
        };
    case FAIL_PROJECT:
            return { ...state, loadProject: false, errors: payload };
    default:
    return state;
}
};

export default ProjectReducer;