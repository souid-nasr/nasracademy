import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allStudents } from "../../Redux/actions/studentActions.js";
import { useEffect } from "react";

import NavbarStudent from '../../components/navbar/NavbarStudent'

const Students = (props) => {
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
<NavbarStudent/>
    <div className="table"style={{ width: "30rem", margin: "auto" }}>
        <hr />
        <h1>Students</h1>
        <hr />
        {StudentErrors && StudentErrors.map((el) => <h2> {el.msg} </h2>)}
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>

            </tr>
          </thead>
          {data.map((el) => (
            <tbody key={el._id}>
              <tr>
              <td>{el.username}</td>
                <td>
                  {el.email}
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

export default Students;