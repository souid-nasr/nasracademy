import './newCourse.css'
import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from '../../Redux/actions/courseActions';
const AddCourse= () => {
    const [newCourse, setNewCourse] = useState()
    const handleChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();

  return (
    <>
    <Sidebar/>
    <div className="newProduct"style={{ width: "30rem", margin: "auto" }}>
      <h1 className="addProductTitle">New Course</h1>
      <form className="addProductForm"style={{ width: "30rem", margin: "auto" }}>
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="Desccription"
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Image</label>
            <input
              type="text"
              placeholder="Image URL"
              name="img"
              onChange={handleChange}
            />
        </div>
        <div className="addProductItem">
            <label>Content</label>
            <input
              type="text"
              placeholder="Content URL"
              name="content"
              onChange={handleChange}
            />
        </div>
        <div className="addProductItem">
            <label>Creator</label>
            <input
              type="text"
              placeholder="Creator"
              name="creator"
              onChange={handleChange}
            />
          </div>
          </div>
        <button className="addProductButton" onClick={() => dispatch(addCourse(newCourse))}>
          Create
        </button>
      </form>
    </div>
    </>
  );
}

export default AddCourse