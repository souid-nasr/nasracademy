import React from "react";
import './deleteTeacherProfile.css'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteTeacher} from "../../Redux/actions/teacherActions";
import { logoutTeacher } from "../../Redux/actions/teacherActions";
import { Link } from "react-router-dom";



const DeleteTeacherProfile = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.TeacherReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTeacher(deleteID))
    alert(`"${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1"   onClick={handleDelete}>
                        <Link
                    to="/registerteacher"
                    onClick={() => dispatch(logoutTeacher())}
                    style={{ color:"red", textDecoration:"none" }}
                  >
                    DELETE
                  </Link>
      </Button>
    </div>
  );
};

export default DeleteTeacherProfile;