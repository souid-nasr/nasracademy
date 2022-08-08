import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editTeacher } from "../../Redux/actions/teacherActions";

const EditTeacherProfile = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;
  const [Edited, setEdited] = useState(props.teacher);

  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setEdited({ ...Edited, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.TeacherReducer.errors);
  const dispatch = useDispatch();
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(editTeacher(updateID, Edited));
  };

  return (
    <div>
      <Button
        variant="outline-success"
        className="btn1"
        onClick={handleShow}
        
      >
        UPDATE
      </Button>
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <spam style ={{marginRight:"10px",marginTop:"15px"}}>Username</spam>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="First Name"
                name="username"
                onChange={handleChange}
              />
            </InputGroup>
            <spam style ={{marginRight:"10px",marginTop:"15px"}}>Email</spam>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="email@example.com"
                name="email"
                onChange={handleChange}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default EditTeacherProfile;