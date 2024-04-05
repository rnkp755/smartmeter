import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

      let location = useLocation();
      let navigate = useNavigate();

      const handleLogout = () => {
            localStorage.removeItem('token');
            navigate("/login");
      }

      return (
            <>
                  <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "sticky", top: "0", zIndex: "10" }}>
                        <div className="container-fluid">
                              <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faBoltLightning} shake /> Lightnings AI</Link>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                          <li className="nav-item">
                                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Dashboard</Link>
                                          </li>
                                          <li className="nav-item">
                                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                          </li>
                                    </ul>
                                    {localStorage.getItem('token') ? (

                                          <Link className="logoutBtn" onClick={handleLogout} role="button"><FontAwesomeIcon style={{ marginRight: "4px" }} icon={faRightFromBracket} />Logout</Link>
                                    ) : (
                                          <Link className={`loginBtn ${location.pathname === "/login" || location.pathname === "/signup" ? "d-none" : ""}`} to="/login" role="button"><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", marginRight: "0.5vw" }} />Sign In</Link>
                                    )}
                              </div>
                        </div>
                  </nav>
            </>
      )
}

export default Navbar
