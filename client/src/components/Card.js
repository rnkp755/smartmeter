import React from 'react';
import '../Styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faV, faA, faK, faW } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
      const voltageDesc = "RMS voltage refers to the effective voltage that produces the same amount of power as an equivalent DC voltage. It is approximately 0.707 times the peak voltage (sqrt(2) times the average voltage) in sinusoidal AC circuits.";
      const currentDesc = "RMS current represents the effective AC current that produces the same average heating effect as an equivalent DC current. Similar to RMS voltage, it is also approximately 0.707 times the peak current in sinusoidal AC circuits.";
      const { logoType, data, todayUsage } = props;
      return (
            <div className={`card my-3 ${logoType.faV ? "voltageCard" : (logoType.faA ? "currentCard" : "powerCard")}`}>
                  <label id="summary">
                        <article>
                              <div className="front">
                                    <header>
                                          <h2>{logoType.faV ? "RMS Voltage" : (logoType.faA ? "RMS Current" : "Power Used")}</h2>
                                          <div className="unit">
                                                {logoType.faV && <FontAwesomeIcon icon={faV} size="2xl" />}
                                                {logoType.faA && <FontAwesomeIcon icon={faA} size="2xl" />}
                                                {logoType.faK && <FontAwesomeIcon icon={faK} size="2xl" />}
                                                {logoType.faW && <FontAwesomeIcon icon={faW} size="2xl" />}
                                          </div>
                                    </header>
                                    <var>{data}</var>
                                    {/* <h3>Due Tasks</h3>
                                    <h4>Completed: 13</h4> */}
                              </div>
                              <div className="back">
                                    <header>
                                          <h2 style={{ textDecoration: "2px solid grey underline" }}>{logoType.faV ? "RMS Voltage" : (logoType.faA ? "RMS Current" : "Power Used")}</h2>
                                    </header>
                                    <p style={{ fontSize: "1em" }}>{logoType.faV ? voltageDesc : (logoType.faA ? currentDesc : "")}</p>
                                    {logoType.faW ? (
                                          <div>
                                                <var>{todayUsage}</var>
                                                <h4>Today Usage</h4>
                                          </div>
                                    ) : null}

                              </div>
                        </article>
                  </label>
            </div >
      );
}

export default Card;
