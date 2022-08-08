import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NavbarStudent from '../../components/navbar/NavbarStudent'
import { useEffect } from "react";
import { allTeachers } from "../../Redux/actions/teacherActions.js";


const Teachers = (props) => {
  const TeacherErrors = useSelector((state) => state.TeacherReducer.errors);


  const dispatch = useDispatch();

  const getTeachersList = () => dispatch(allTeachers());
  const TeachersData = useSelector(
    (state) => state.TeacherReducer.TeachersData
  );

  useEffect(() => {
    getTeachersList();

  });

  return (
    <div className="TeachersList">
<NavbarStudent/>
    <div className="table"style={{ width: "30rem", margin: "auto" }}>
        <hr />
        <h1>Teachers</h1>
        <hr />
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          {TeachersData.map((el) => (
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

export default Teachers;