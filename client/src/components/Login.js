import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCircleCheck, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import '../Styles/signin.css';
import '../Styles/button.css';

const Login = (props) => {

      const [credentials, setCredentials] = useState({ email: "", password: "" })

      let navigate = useNavigate();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      function validateForm() {
            return (credentials.email.match(emailRegex) && credentials.password.length > 0);
      };

      const [isSending, setIsSending] = useState(false);
      const [isSent, setIsSent] = useState(false);


      const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSending(true);
            const response = await fetch("http://localhost:5000/api/auth/login", {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            if (json.success) {
                  setIsSent(true);
                  //Save the auth-token and Redirect to Homepage
                  localStorage.setItem('token', json.authToken);
                  // props.showAlert("Logged In Successfully", "success");
                  navigate("/");
            }
            else {
                  console.error("Something went wrong");
                  setIsSending(false);
                  setIsSent(false);
                  // props.showAlert("Invalid credentials", "danger");
            }
      }

      const onchange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }

      return (
            <div className="container-fluid main-container">
                  <div className="row justify-content-center align-items-center">
                        <div className="col-md-4" style={{ marginTop: "20.5vh" }}>
                              <form className="container mt-3 login-form" onSubmit={handleSubmit}>
                                    <h2>Login To continue...</h2>
                                    <div className="mb-3">
                                          <label htmlFor="email" className="form-label">Email address</label>
                                          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp" />
                                          {
                                                credentials.email.trim() !== '' ? (
                                                      credentials.email.match(emailRegex) ? (
                                                            <div id="emailHelp" className="form-text">
                                                                  <FontAwesomeIcon icon={faCircleCheck} beatFade style={{ color: "#009b00", cursor: "default", marginRight: "5px" }} />Looks Good
                                                            </div>
                                                      ) : (<div id="emailHelp" className="form-text">
                                                            <FontAwesomeIcon icon={faTriangleExclamation} beatFade style={{ color: "#ff0000", cursor: "default", marginRight: "5px" }} />Please Enter Correct Email
                                                      </div>
                                                      )
                                                ) : (<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>)
                                          }
                                    </div>
                                    <div className="mb-3">
                                          <label htmlFor="password" className="form-label">Password</label>
                                          <input type="password" className="form-control" id="password" name="password" onChange={onchange} value={credentials.password} />
                                    </div>
                                    <div className="createAnAccountMsg" onClick={() => navigate("/signup")}>Create an account</div>
                                    <button type="submit" className={`${isSending || isSent ? "sending" : ""} ${!validateForm() ? "disabled" : ""}`}>
                                          <FontAwesomeIcon className={isSent ? "check icon" : "send icon"} icon={faRightToBracket} size="xl" style={{ color: "#ffffff", }} />
                                          <div className={`text ${isSending || isSent ? "sending" : ""}`}>{isSending ? (isSent ? "Logged In..." : "Logging In...") : "Login"}</div>
                                    </button>
                              </form>
                        </div>
                  </div >
            </div >
      )
}

export default Login