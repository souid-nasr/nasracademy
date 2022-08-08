import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { deleteAnswer} from "../../Redux/actions/answerActions";


const DeleteAnswer = (props) => {
  const deleteID = props.id;
  const errors = useSelector((state) => state.AnswerReducer.errors);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteAnswer(deleteID))
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

export default DeleteAnswer;