import DataContext from './DataContext';
import React, { useState } from 'react';

const PowerState = (props) => {
      const host = "http://localhost:5000"
      const initialdata = {
            currentVoltage: 0,
            rmsCurrent: 0,
            powerUsed: 0,
      }
      const [data, setData] = useState(initialdata);

      const getData = async () => {
            try {
                  const response = await fetch(`${host}/api/userElectricity/fetchdata`, {
                        method: 'GET',
                        headers: {
                              'Content-Type': 'application/json',
                              "auth-token": localStorage.getItem('token')
                        },
                  });
                  const json = await response.json();
                  setData(json);
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      };

      return (
            <DataContext.Provider value={{ data, getData }}>
                  {props.children}
            </DataContext.Provider>
      );
};

export default PowerState;
