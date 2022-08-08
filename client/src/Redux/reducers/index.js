//import combineReducers
import {combineReducers} from "redux"

//import userReducer
import StudentReducer from "./studentReducer"
import TeacherReducer from "./teacherReducer"
import CourseReducer from "./courseReducer"
import ProjectReducer from './projectReducer'
import ContactReducer from './contactReducer'
import AnswerReducer from './answerReducer'
//create rootReducer
const rootReducer = combineReducers({StudentReducer, TeacherReducer,CourseReducer,ProjectReducer,ContactReducer,AnswerReducer})

//export
export default rootReducer