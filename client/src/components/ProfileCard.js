import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Styles/ProfileCard.css'

const ProfileCard = (props) => {
      return (
            <div className="main-container-profile-card">
                  <div className="cards">
                        <img className='profileImg'
                              src={props.socialLinks.profileImg}
                              alt=""
                        />

                        <h4>{props.name}</h4>
                        <p>{props.desc}</p>

                        <div className={`social-media ${props.name === "Raushan Kumar Thakur" || props.name === "Atharva Markandey" ? "reduceMargin" : " "}`}>
                              <a href={props.socialLinks.linkedin} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='social-media-icon' icon={faLinkedin} /></a>
                              <a href={props.socialLinks.github} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='social-media-icon' icon={faSquareGithub} /></a>
                              <a href={props.socialLinks.email} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='social-media-icon' icon={faEnvelope} /></a>
                              <a href={props.socialLinks.instagram} target="_blank" rel="noreferrer" ><FontAwesomeIcon className='social-media-icon' icon={faSquareInstagram} /></a>
                        </div>
                  </div>
            </div >
      )
}
export default ProfileCard;