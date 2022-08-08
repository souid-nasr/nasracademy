
import React, {useEffect } from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import EditTeacherProfile from '../../components/editTeacherProfile/EditTeacherProfile'
import {getTeacher} from '../../Redux/actions/teacherActions'
import { useSelector, useDispatch } from "react-redux";
import "./profile.css";


const TeacherProfile = () => {
  
  const dispatch = useDispatch();
  const getTeacherDetails = () => dispatch(getTeacher());
  const teacher = useSelector((state) => state.TeacherReducer.data)
  console.log(teacher)

  useEffect(() => {
    getTeacherDetails()
  }, []);
return (
    <div>
        <Sidebar/>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU" style={{ width: "100%" }} />
        {/* <p>{teacher._id}</p> */}
        <h1>{teacher.username}</h1>
        <p className="title">{teacher.email}</p>
        
        <p>
        <EditTeacherProfile teacher ={teacher} id={teacher._id}/>
        </p>
      </div>
    </div>
  );
};
export default TeacherProfile;