import React, { useState} from "react";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  sendAnswer,
} from "../../Redux/actions/answerActions";
import "./answer.scss";

function Answer() {
  const [answerForm, setAnswerForm] = useState({});

  const handleInputChange = (e) => {
    setAnswerForm({ ...answerForm, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.AnswerReducer.errors);
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.AnswerReducer.data
  )
  return (
    <div>
    <section className="answer-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="answer-wrap w-100 p-lg-5 p-4">
                    <form
                      id="answerForm"
                      className="answerForm"
                      onClick={() => dispatch(sendAnswer(answerForm))}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                          <h6 className="mb-1">Username</h6>
                            <input
                              type="text"
                              className="form-control"
                              name="username"
                              placeholder="Name"
                              onChange={handleInputChange}
                              
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <h6 className="mb-1">Email</h6>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <h6 className="mb-1">Title</h6>
                            <input
                              type="text"
                              className="form-control"
                              name="title"
                              placeholder="Title"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <h6 className="mb-1">Link</h6>
                            <textarea
                              type="text"
                              className="form-control"
                              name="url"
                              placeholder="Link"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Submit your project</h3>
                    <p className="mb-4">
                      We're open for any idea
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>);
}

export default Answer