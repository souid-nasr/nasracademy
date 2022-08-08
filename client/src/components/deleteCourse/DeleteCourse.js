import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteCourse} from "../../Redux/actions/courseActions";


const DeleteCourse = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.CourseReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCourse(deleteID))
    alert(`"${deleteID}" was deleted successfully!`);
    
  };
  return (
    <div>
      <Button variant="outline-danger" className="btn1" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteCourse;