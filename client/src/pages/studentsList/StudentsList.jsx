import Sidebar from '../../components/sidebar/Sidebar'
import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteStudentProfile from "../../components/deleteStudentProfile/DeleteStudentProfile";
import EditStudentProfile from "../../components/editStudentProfile/EditStudentProfile.js";
import { allStudents } from "../../Redux/actions/studentActions.js";


const StudentsList = (props) => {
  const StudentErrors = useSelector((state) => state.StudentReducer.errors);


  const dispatch = useDispatch();

  const getStudentsList = () => dispatch(allStudents());
  const data = useSelector(
    (state) => state.StudentReducer.data
  );

  useEffect(() => {
    getStudentsList();

  });

  return (
    <div className="StudentsList">
    <Sidebar/>
    <div className="table"style={{ width: "30rem", margin: "auto" }}>
        <hr />
        <h1>Students</h1>
        <hr />
        {StudentErrors && StudentErrors.map((el) => <h2> {el.msg} </h2>)}
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>
                  <Link to={`/api/students/all/${el._id}`}>{el._id}</Link>
                </td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>
                  <div className="actionBtn" style={{display:"flex",flexDirection:"row"}}>
                    <div style={{marginRight: "10px" }}>
                    <EditStudentProfile student={el} id={el._id} />
                    </div>
                    <div>
                    <DeleteStudentProfile id={el._id} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <hr />
        </div>
    </div>
  );
};

export default StudentsList;