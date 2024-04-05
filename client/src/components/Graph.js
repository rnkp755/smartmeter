import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
      const chartContainer = useRef(null);
      const chartInstance = useRef(null);

      let dates = [];
      let dailyUsedData = [];

      useEffect(() => {
            if (window.location.reload) {
                  if (chartInstance.current) {
                        // Destroy the previous chart instance if it exists
                        chartInstance.current.destroy();
                  }

                  if (data && data[0]) {
                        for (let i = 0; i < data.length; i++) {
                              let obj = data[i];
                              let date = new Date(obj.date).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                              });
                              dates.push(date);
                              dailyUsedData.push(obj.powerUsed * 1000);
                        }

                        chartInstance.current = new Chart(chartContainer.current, {
                              type: 'bar',
                              data: {
                                    labels: dates,
                                    datasets: [{
                                          label: 'Daily Power Usage (In Wh)',
                                          data: dailyUsedData,
                                          borderWidth: 1,
                                          borderColor: 'black',
                                          backgroundColor: [
                                                'rgba(255, 99, 132)',
                                                'rgba(54, 162, 235)',
                                                'rgba(255, 206, 86)',
                                                'rgba(75, 192, 192)',
                                                'rgba(153, 102, 255)'
                                          ],
                                    }]
                              },
                              options: {
                                    animation: false,
                                    scales: {
                                          y: {
                                                beginAtZero: true
                                          }
                                    }
                              }
                        });
                  }
            }
            // eslint-disable-next-line
      }, [data]);

      return (
            <div>
                  <canvas ref={chartContainer} id="myChart" className="container" style={{ marginTop: "5px" }} />
            </div>
      );
};

export default Graph;
