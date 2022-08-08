import './newProject.css'
import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from '../../Redux/actions/projectActions';
const AddProject= () => {
  const [newProject, setNewProject] = useState()
  const handleChange = (e) => {
    e.preventDefault();
      setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
return (
  <>
  <Sidebar/>
  <div className="newProduct"style={{ width: "30rem", margin: "auto" }}>
    <h1 className="addProductTitle">New project</h1>
    <form className="addProductForm"style={{ width: "30rem", margin: "auto" }}>
      <div className="formLeft">
      <div className="addProductItem">
          <label>Type</label>
          <input
            type="text"
            placeholder="Type"
            name="about"
            onChange={handleChange}
          />
        </div>
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
          <label>Creator</label>
          <input
            type="text"
            placeholder="Creator"
            name="creator"
            onChange={handleChange}
          />
        </div>
        </div>
      <button className="addProductButton" onClick={() => dispatch(addProject(newProject))}>
        Create
      </button>
    </form>
  </div>
  </>
);
}

export default AddProject