import React, {useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteContactForm from "../../components/deleteContactForm/DeleteContactForm";
import { allContactForms } from "../../Redux/actions/contactActions";
import Sidebar from '../../components/sidebar/Sidebar';


const ContactFormsList = (props) => {
  // const errors = useSelector((state) => state.ContactReducer.errors);


  const dispatch = useDispatch();

  const getContactForms = () => dispatch(allContactForms());
  const data = useSelector(
    (state) => state.ContactReducer.data
  );

  useEffect(() => {
    getContactForms();
  }, []);

  return (
    <>
    <Sidebar/>
    <div className="FormsList" style={{ width: "30rem", margin: "auto" }}>
        <hr />
        <h1>Messages</h1>
        <h6>(Returns will be by email)</h6>
        <hr />
        {/* {errors && errors.map((el) => <h2> {el.msg} </h2>)} */}
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>{el.createdAt}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.subject}</td>
                <td>{el.formBody}</td>
                <td>
                  <div className="actionBtn">
                    <DeleteContactForm id={el._id} />
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

export default ContactFormsList;