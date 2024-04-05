import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from "../context/electricityData/DataContext";
import Alert from './Alert'
import Card from './Card'
import Graph from './Graph'

const Home = () => {
      const { data, getData } = useContext(DataContext);
      const navigate = useNavigate();

      const [powerdata, setPowerData] = useState({
            currentVoltage: 0,
            rmsCurrent: 0,
            powerUsed: 0,
      });

      const [dailyUsage, setDailyUsage] = useState([]);

      useEffect(() => {
            if (!localStorage.getItem('token')) {
                  navigate("/login");
            }

            // Use optional chaining to access data properties
            getData();

            // console.log('Data from Context', data);

            // Check if data exists and has at least one object in the array
            if (data && data.length > 0) {
                  // Extract values from the first object in the array
                  const { currentVoltage, rmsCurrent, powerUsed } = data[0];

                  setDailyUsage(data[0].dailyUsage);
                  // console.log(dailyUsage);

                  // Update powerdata state with the received data
                  setPowerData({
                        currentVoltage: currentVoltage,
                        rmsCurrent: rmsCurrent,
                        powerUsed: powerUsed,
                  });

                  // console.log('Power Data', {
                  //       currentVoltage: currentVoltage,
                  //       rmsCurrent: rmsCurrent,
                  //       powerUsed: powerUsed,
                  // });
            }
            // eslint-disable-next-line
      }, [data, getData, navigate]);
      // The above array will be "[data, getData, navigate]"
      return (
            <>
                  <Alert />
                  <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Card logoType={{ faV: true }} data={powerdata.currentVoltage} todayUsage="-1" />
                        <Card logoType={{ faA: true }} data={powerdata.rmsCurrent} />
                        <Card logoType={{ faK: true, faW: true }} data={powerdata.powerUsed} todayUsage="-1" />
                        {/* <Card logoType={{ faK: true, faW: true }} data={powerdata.powerUsed} todayUsage={dailyUsage[dailyUsage.length - 1].powerUsed} /> */}


                  </div>
                  <Graph data={dailyUsage} />
            </>
      );
};
export default Home;