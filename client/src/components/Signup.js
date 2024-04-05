import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCircleCheck, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import '../Styles/signin.css';

const Signup = (props) => {
      const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmpassword: "" })
      let navigate = useNavigate();

      //Validation of Forms

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const [isSending, setIsSending] = useState(false);
      const [isSent, setIsSent] = useState(false);

      function validateForm() {
            return (credentials.name.length >= 3 && credentials.email.match(emailRegex) && credentials.password.length >= 5 && (credentials.password === credentials.confirmpassword));
      };


      const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSending(true);
            if (validateForm) {
                  const { name, email, password } = credentials;
                  const response = await fetch("http://localhost:5000/api/auth/signup", {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name, email, password })
                  });
                  const json = await response.json();
                  console.log(json);
                  if (json.success) {
                        setIsSent(true);
                        //Save the auth-token and Redirect to Homepage
                        localStorage.setItem('token', json.authtoken);
                        // props.showAlert("Account Created successfully", "success");
                        navigate("/");
                  }
                  else {
                        setIsSending(false);
                        setIsSent(false);
                        // props.showAlert("Invalid details", "danger");
                  }
            }
      }

      const onchange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }

      return (
            <div class="container-fluid main-container">
                  <div class="row justify-content-center align-items-center">
                        <div className="col-md-4" style={{ marginTop: "13vh" }}>
                              <form className="container mt-3 signup-form" onSubmit={handleSubmit}>
                                    <h2>Signup to Join...</h2>
                                    <div className="mb-3">
                                          <label htmlFor="name" className="form-label">Name</label>
                                          <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onchange} minLength={3} required />
                                          {
                                                credentials.name.trim() === '' ? (
                                                      credentials.email.trim() !== '' || credentials.password.trim() !== '' || credentials.confirmpassword.trim() !== '' ? (
                                                            <div id="emailHelp" className="form-text">
                                                                  <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Name is Required
                                                            </div>
                                                      ) : null
                                                ) : credentials.name.length < 3 ? (
                                                      <div id="emailHelp" className="form-text">
                                                            <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Name must be at least 3 characters
                                                      </div>
                                                ) : (
                                                      <div id="emailHelp" className="form-text">
                                                            <FontAwesomeIcon icon={faCircleCheck} beatFade style={{ color: "#009b00", cursor: "default", marginRight: "5px" }} />Looks Good
                                                      </div>
                                                )
                                          }
                                    </div>
                                    <div className="mb-3">
                                          <label htmlFor="email" className="form-label">Email address</label>
                                          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onchange} required aria-describedby="emailHelp" />
                                          {
                                                credentials.email.trim() === '' ? (
                                                      credentials.password.trim() !== '' || credentials.confirmpassword.trim() !== '' ? (
                                                            <div id="emailHelp" className="form-text">
                                                                  <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Email is Required
                                                            </div>
                                                      ) : (<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>)
                                                ) : credentials.email.match(emailRegex) ? (
                                                      <div id="emailHelp" className="form-text">
                                                            <FontAwesomeIcon icon={faCircleCheck} beatFade style={{ color: "#009b00", cursor: "default", marginRight: "5px" }} />Looks Good
                                                      </div>
                                                ) : (<div id="emailHelp" className="form-text">
                                                      <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Please Enter Correct Email
                                                </div>)
                                          }
                                    </div>
                                    <div className="mb-3">
                                          <label htmlFor="password" className="form-label">Password</label>
                                          <input type="password" className="form-control" id="password" name="password" onChange={onchange} minLength={5} required value={credentials.password} />
                                          {
                                                credentials.password.trim() === '' ? (
                                                      credentials.confirmpassword.trim() !== '' ? (
                                                            <div id="emailHelp" className="form-text">
                                                                  <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Password is Required
                                                            </div>
                                                      ) : null
                                                ) : credentials.password.length < 5 ? (
                                                      <div id="emailHelp" className="form-text">
                                                            <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Password must be at least 3 characters
                                                      </div>
                                                ) : (
                                                      <div id="emailHelp" className="form-text">
                                                            <FontAwesomeIcon icon={faCircleCheck} beatFade style={{ color: "#009b00", cursor: "default", marginRight: "5px" }} />Looks Good
                                                      </div>
                                                )
                                          }
                                    </div>
                                    <div className="mb-3">
                                          <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                                          <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" onChange={onchange} minLength={5} required value={credentials.confirmpassword} />
                                          {
                                                credentials.confirmpassword.length !== 0 ? (
                                                      credentials.password === credentials.confirmpassword ? (
                                                            <div id="emailHelp" className="form-text">
                                                                  <FontAwesomeIcon icon={faCircleCheck} beatFade style={{ color: "#009b00", cursor: "default", marginRight: "5px" }} />Looks Good
                                                            </div>
                                                      ) : (
                                                            <div id="emailHelp" className="form-text">
                                                                  <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Password and Confirm Password must be same
                                                            </div>
                                                      )
                                                ) : null
                                          }
                                    </div>
                                    <div className="loginMsg" onClick={() => navigate("/login")}>Already have an account</div>
                                    <button type="submit" className={`${isSending || isSent ? "sending" : ""} ${!validateForm() ? "disabled" : ""}`}>
                                          <FontAwesomeIcon className={isSent ? "check icon" : "send icon"} icon={faRightToBracket} size="xl" style={{ color: "#ffffff", }} />
                                          <div className={`text ${isSending || isSent ? "sending" : ""}`}>{isSending ? (isSent ? "Signed Up..." : "Signing Up...") : "Sign Up"}</div>
                                    </button>
                              </form>

                        </div>
                  </div>
            </div>
      )
}

export default Signup
