import React, {useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteAnswer from "../../components/deleteAnswer/DeleteAnswer";
import { allAnswers } from "../../Redux/actions/answerActions";
import Sidebar from '../../components/sidebar/Sidebar';


const AnswersList = (props) => {
  // const errors = useSelector((state) => state.AnswerReducer.errors);


  const dispatch = useDispatch();

  const getAnswers = () => dispatch(allAnswers());
  const data = useSelector(
    (state) => state.AnswerReducer.data
  );

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <>
    <Sidebar/>
    <div className="FormsList" style={{ width: "30rem", margin: "auto" }}>
        <hr />
        <h1>Student's Projects</h1>
        {/* {errors && errors.map((el) => <h2> {el.msg} </h2>)} */}
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>{el.createdAt}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.title}</td>
                <td>{el.url}</td>
                <td>
                  <div className="actionBtn">
                    <DeleteAnswer id={el._id} />
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

export default AnswersList;