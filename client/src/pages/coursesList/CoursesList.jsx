import Sidebar from '../../components/sidebar/Sidebar'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteCourse from "../../components/deleteCourse/DeleteCourse";
import EditCourse from "../../components/editCourse/EditCourse.js";
import { allCourses } from "../../Redux/actions/courseActions.js";


const CoursesList = (props) => {
  const CourseErrors = useSelector((state) => state.CourseReducer.errors);


  const dispatch = useDispatch();

  const getCoursesList = () => dispatch(allCourses());
  const data = useSelector(
    (state) => state.CourseReducer.data
  );
  console.log(data)

  useEffect(() => {
    getCoursesList()
  }, []);

  return (
    <>
     {/* <Topbar/> */}
    <Sidebar/>
    <div className="CoursesList">
        <hr />
        <h1>Courses</h1>
        <hr />
        {CourseErrors && CourseErrors.map((el) => <h2> {el.msg} </h2>)}
        <Table  bordered  variant="dark">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Title</th>
              <th >Description</th>
              <th>Image</th>
              <th>Content</th>
              <th>Creator</th>
              <th></th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>
                  <Link to={`/api/courses/${el._id}`}>{el._id}</Link>
                </td>
                <td>{el.title}</td>
                <td>{el.desc}</td>
                <td>{el.img}</td>
                <td>{el.content}</td>
                <td>{el.creator}</td>
                <td>
                  <div className="actionBtn">
                    <EditCourse course={el} id={el._id} />
                    <DeleteCourse id={el._id} />
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

export default CoursesList;