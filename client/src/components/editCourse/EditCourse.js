import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editCourse } from "../../Redux/actions/courseActions";

const EditCourse = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;
  const [Edited, setEdited] = useState(props.course);

  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setEdited({ ...Edited, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.CourseReducer.errors);
  const dispatch = useDispatch();
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(editCourse(updateID, Edited))
  };

  return (
    <div>
      <Button
        variant="outline-success"
        className="btn1"
        onClick={handleShow}
      >
        Edit
      </Button>
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <spam style ={{marginRight:"10px",marginTop:"15px"}}>Title</spam>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="title"
                name="title"
                onChange={handleChange}
              />
            </InputGroup>
            <spam style ={{marginRight:"10px",marginTop:"15px"}}>Description</spam>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="description"
                name="desc"
                onChange={handleChange}
              />
            </InputGroup>
            <spam style ={{marginRight:"10px",marginTop:"15px"}}>Image</spam>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="image source"
                name="img"
                onChange={handleChange}
              />
            </InputGroup>
            <spam style ={{marginRight:"10px",marginTop:"15px"}}>Content</spam>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="content"
                name="content"
                onChange={handleChange}
              />
            </InputGroup>
            <spam style ={{marginRight:"10px",marginTop:"15px"}}>Creator</spam>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="created by "
                name="creator"
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

export default EditCourse;