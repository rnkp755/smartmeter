import React, { useState } from 'react';
import UserContext from './UserContext';

const UserState = (props) => {
      const host = "http://localhost:5000"
      const initialDetails = {
            _id: null,
            name: "Unknown",
      }

      const [userData, setUserData] = useState(initialDetails);

      const getUserData = async () => {
            try {
                  const response = await fetch(`${host}/api/auth/user`, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                              "auth-token": localStorage.getItem('token')
                        },
                  });
                  const json = await response.json();
                  setUserData(json);
            }
            catch (error) {
                  console.error('Error fetching data:', error);
            }
      };
      return (
            <UserContext.Provider value={{ userData, getUserData }}>
                  {props.children}
            </UserContext.Provider>
      );
}
export default UserState;