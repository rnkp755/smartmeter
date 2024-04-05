import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userData/UserContext';
import '../Styles/Alert.css';

const Alert = () => {
      const { userData, getUserData } = useContext(UserContext);
      const navigate = useNavigate();

      const [userDetails, setUserDetails] = useState({
            _id: null,
            name: 'Unknown',
      });

      useEffect(() => {
            if (!localStorage.getItem('token')) {
                  navigate('/login');
            }

            getUserData();
            // console.log('User Details from Context ', userData);
            setUserDetails({
                  _id: userData._id,
                  name: userData.name,
            });
            // eslint-disable-next-line
      }, [navigate]);

      // eslint-disable-next-line
      const [copied, setCopied] = useState(false);

      const handleCopy = () => {
            navigator.clipboard.writeText(userDetails._id);
            setCopied(true);
            setTimeout(() => {
                  setCopied(false);
            }, 2000); // Reset copied state after 2 seconds
      };

      return (
            <div className="alert alert-primary" role="alert">
                  Welcome
                  <span className="userData" style={{ cursor: "default" }}> User</span>, Your SmartMeter I'd is
                  <span className="userData meterData" title={copied ? "Copied!" : "Click To Copy"} onClick={handleCopy}>
                        <abbr>6575a8171f14a9eda27b1c8c</abbr>
                  </span>

            </div >
      );
};

export default Alert;
