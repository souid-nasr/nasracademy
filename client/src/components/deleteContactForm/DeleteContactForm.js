import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteContactForm} from "../../Redux/actions/contactActions";


const DeleteContactForm = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.ContactReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactForm(deleteID))
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

export default DeleteContactForm;