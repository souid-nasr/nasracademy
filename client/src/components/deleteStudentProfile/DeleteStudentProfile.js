import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteStudent} from "../../Redux/actions/studentActions";


const DeleteStudentProfile = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.StudentReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteStudent(deleteID))
    alert(`"${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        DELETE
      </Button>
    </div>
  );
};

export default DeleteStudentProfile;