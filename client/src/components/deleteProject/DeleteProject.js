import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteProject} from "../../Redux/actions/projectActions";


const DeleteProject = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.ProjectReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProject(deleteID))
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

export default DeleteProject;