import React from "react";
import NavbarStudent from '../../components/navbar/NavbarStudent';
import EditStudentProfile from '../../components/editStudentProfile/EditStudentProfile'

import { useSelector, useDispatch } from "react-redux";

const StudentProfile = () => {
  const student = useSelector((state) => state.StudentReducer.student);
  return (
    <div>
        <NavbarStudent/>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfoU4jaP_y6-LiF2sKa3Etmyw4xSHY7n8PA&usqp=CAU" style={{ width: "100%" }} />
        <p>{student._id}</p>
        <h1>{student.username}</h1>
        <p className="title">{student.email}</p>
        
        <p>
        <EditStudentProfile student ={student} id={student._id}/>
        </p>
      </div>
    </div>
  );
};

export default StudentProfile;