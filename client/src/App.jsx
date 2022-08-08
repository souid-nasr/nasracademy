import Landing from './pages/landing/Landing'
import RegisterStudent from './pages/register/RegisterStudent'
import RegisterTeacher from './pages/register/RegisterTeacher'
import LoginTeacher from './pages/login/LoginTeacher'
import LoginStudent from './pages/login/LoginStudent'
//teacher space
import PrivateRouteTeachers from './routes/PrivateRouteTeachers'
import TeacherProfile from './pages/profile/TeacherProfile'
import StudentsList from './pages/studentsList/StudentsList'
import CoursesList from './pages/coursesList/CoursesList.jsx'
import ContactFormsList from './pages/contactList/ContactList'
import ProjectsList from './pages/projectsList/ProjectsList'
import AnswersList from './pages/answersList/AnswersList'
import NewCourse from './pages/newCourse/NewCourse'
import NewProject from './pages/newProject/NewProject'
//studentspace
import PrivateRouteStudents from './routes/PrivateRouteStudents'
import StudentProfile from './pages/profile/StudentProfile'
import Courses from './pages/listsforstudents/Courses'
import Teachers from './pages/listsforstudents/Teachers'
import Students from './pages/listsforstudents/Students'
import Projects from './pages/listsforstudents/Projects'
import Watch from './pages/watch/Watch'
import Answer from './pages/answer/Answer'

import Contact from './pages/contact/Contact'
import Elearning from './pages/elearning/Elearning';
import PlayQuiz from './pages/quiz/Quiz'
import Resources from './pages/resources/Resources'
import Footer from "./components/footer/Footer"
import "./app.scss";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Orientation from './pages/orientation/Orientation';
function App() {
  return (
<div>
  <Router>
    <Switch>
      {/* Public space */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/elearnining" component={Elearning}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/resources" component={Resources}/>
      <Route exact path="/register-teacher" component={RegisterTeacher}/>
      <Route exact path="/login-teacher" component={LoginTeacher}/>
      <Route exact path="/login-student" component={LoginStudent}/>
{/* Teacher space */}
      <Route exact path="/register-student" component={RegisterStudent}/>
      <PrivateRouteTeachers exact path="/auth-teacher" component={TeacherProfile}/>
      <PrivateRouteTeachers exact path="/teacher/studentsList" component={StudentsList}/>
      <PrivateRouteTeachers exact path="/teacher/coursesList" component={CoursesList}/>
      <PrivateRouteTeachers exact path="/teacher/projectsList" component={ProjectsList}/>
      <PrivateRouteTeachers exact path="/teacher/answersList" component={AnswersList}/>
      <PrivateRouteTeachers exact path="/teacher/messages" component={ContactFormsList}/>
      <PrivateRouteTeachers exact path="/teacher/newCourse" component={NewCourse}/>
      <PrivateRouteTeachers exact path="/teacher/newProject" component={NewProject}/>
      <PrivateRouteTeachers exact path="/teacher/quiz" component={PlayQuiz}/>

{/* Student space */}
      <PrivateRouteStudents exact path="/auth-student" component={StudentProfile} />
      <PrivateRouteStudents exact path="/student/contact" component={Contact} />
      <PrivateRouteStudents exact path="/student/courses" component={Courses} />
      <PrivateRouteStudents exact path="/student/students" component={Students} />
      <PrivateRouteStudents exact path="/student/teachers" component={Teachers} />
      <PrivateRouteStudents exact path="/student/projects" component={Projects}/>
      <PrivateRouteStudents exact path="/student/submitProject" component={Answer}/>
      <PrivateRouteStudents exact path="/student/quiz" component={PlayQuiz}/>
      <PrivateRouteStudents exact path="/student/watch" component={Watch}/>
    </Switch>
  </Router>
  <Footer/>
</div>
  );
}

export default App;