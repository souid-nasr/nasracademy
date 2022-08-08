import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import DeleteProject from "../../components/deleteProject/DeleteProject";
import { allProjects } from "../../Redux/actions/projectActions.js";


const ProjectsList = (props) => {
  const ProjectErrors = useSelector((state) => state.ProjectReducer.errors);


  const dispatch = useDispatch();

  const getProjectsList = () => dispatch(allProjects());
  const data = useSelector(
    (state) => state.ProjectReducer.data
  );

  useEffect(() => {
    getProjectsList();
  });

  return (
    <>
    <Sidebar/>
    <div className="ProjectsList">
        <hr />
        <h1>Projects</h1>
        <hr />
        {ProjectErrors && ProjectErrors.map((el) => <h2> {el.msg} </h2>)}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Type</th>
              <th>Title</th>
              <th>Description</th>
              <th>Creator</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>
                  <Link to={`/api/projects/${el._id}`}>{el._id}</Link>
                </td>
                <td>{el.about}</td>
                <td>{el.title}</td>
                <td>{el.desc}</td>
                <td>{el.creator}</td>
                <td>
                  <div className="actionBtn">
                    <DeleteProject id={el._id} />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <hr />
    </div>
  </>
  );
};

export default ProjectsList;