import React from 'react';
import ProfileCard from './ProfileCard';
import '../Styles/About.css'
const msgImg = require('../Images/about.png');

const About = () => {
      const links = [
            {
                  profileImg: require('../Images/shreya-profile.png'),
                  linkedin: "#",
                  github: "https://github.com/ShreyaVishesh",
                  email: "mailto:shreyaag2003@gmail.com",
                  instagram: "#",
            },
            {
                  profileImg: require('../Images/riya-profile.png'),
                  linkedin: "https://www.linkedin.com/in/riya-karmakar-7204a4256/",
                  github: "#",
                  email: "mailto:22bai71069@cuchd.in",
                  instagram: "#",
            },
            {
                  profileImg: require('../Images/raushan-profile.png'),
                  linkedin: "https://www.linkedin.com/in/hackerraushan/",
                  github: "https://github.com/rnkp755",
                  email: "mailto:rnkp755@gmail.com",
                  instagram: "https://www.instagram.com/rnkp755/",
            },
            {
                  profileImg: require('../Images/shivam-profile.png'),
                  linkedin: "https://www.linkedin.com/in/shivam6006/",
                  github: "#",
                  email: "mailto:skyd6ix@gmail.com",
                  instagram: "https://www.instagram.com/skyd_6ix_/",
            },
            {
                  profileImg: require('../Images/atharva-profile.png'),
                  linkedin: "#",
                  github: "#",
                  email: "mailto:22bcs11006@cuchd.in",
                  instagram: "#",
            },
            {
                  profileImg: require('../Images/pranav-profile.png'),
                  linkedin: "#",
                  github: "#",
                  email: "mailto:21bcs5152@gmail.com",
                  instagram: "#",
            }
      ]
      return (
            <>
                  <div className='about-container'>
                        <div className="about">
                              <img className="msg-img" src={msgImg} alt='Message by Team Lightning' />
                        </div>
                        <div className="profileContainer">
                              <div className='ourTeam row-1'>
                                    <ProfileCard name="Shreya Agarwal" desc="Team Leader" socialLinks={links[0]} />
                                    <ProfileCard name="Riya Karmakar" desc="Team Member" socialLinks={links[1]} />
                                    <ProfileCard name="Raushan Kumar Thakur" desc="Team Member" socialLinks={links[2]} />
                              </div>
                              <div className='ourTeam row-2'>
                                    <ProfileCard name="Shivam Sharma" desc="Team Member" socialLinks={links[3]} />
                                    <ProfileCard name="Atharva Markandey" desc="Team Member" socialLinks={links[4]} />
                                    <ProfileCard name="Pranav Kumar" desc="Team Member" socialLinks={links[5]} />
                              </div>
                        </div>
                  </div>
                  <footer>
                        <svg
                              width="100%"
                              height="100%"
                              id="svg"
                              viewBox="0 0 1440 390"
                              xmlns="http://www.w3.org/2000/svg"
                              className="transition duration-300 ease-in-out delay-150"
                        >
                              <style
                                    dangerouslySetInnerHTML={{
                                          __html:
                                                '\n          .path-0{\n            animation:pathAnim-0 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-0{\n            0%{\n              d: path("M 0,400 C 0,400 0,133 0,133 C 94.34449760765548,142.1578947368421 188.68899521531097,151.31578947368422 275,150 C 361.31100478468903,148.68421052631578 439.58851674641164,136.89473684210526 528,126 C 616.4114832535884,115.10526315789474 714.9569377990431,105.10526315789475 819,112 C 923.0430622009569,118.89473684210525 1032.5837320574162,142.68421052631578 1137,149 C 1241.4162679425838,155.31578947368422 1340.7081339712918,144.1578947368421 1440,133 C 1440,133 1440,400 1440,400 Z");\n            }\n            25%{\n              d: path("M 0,400 C 0,400 0,133 0,133 C 103.33014354066987,159.4019138755981 206.66028708133973,185.80382775119617 287,176 C 367.33971291866027,166.19617224880383 424.6889952153109,120.18660287081339 536,115 C 647.3110047846891,109.81339712918661 812.5837320574163,145.44976076555025 911,143 C 1009.4162679425837,140.55023923444975 1040.9760765550238,100.01435406698566 1118,92 C 1195.0239234449762,83.98564593301434 1317.5119617224882,108.49282296650716 1440,133 C 1440,133 1440,400 1440,400 Z");\n            }\n            50%{\n              d: path("M 0,400 C 0,400 0,133 0,133 C 78.04784688995215,123.73684210526315 156.0956937799043,114.47368421052632 241,120 C 325.9043062200957,125.52631578947368 417.66507177033486,145.84210526315792 526,148 C 634.3349282296651,150.15789473684208 759.2440191387559,134.1578947368421 878,128 C 996.7559808612441,121.84210526315789 1109.3588516746413,125.52631578947367 1202,128 C 1294.6411483253587,130.47368421052633 1367.3205741626793,131.73684210526318 1440,133 C 1440,133 1440,400 1440,400 Z");\n            }\n            75%{\n              d: path("M 0,400 C 0,400 0,133 0,133 C 85.16746411483254,151.44019138755982 170.33492822966508,169.8803827751196 277,167 C 383.6650717703349,164.1196172248804 511.82775119617213,139.91866028708134 615,125 C 718.1722488038279,110.08133971291866 796.354066985646,104.44497607655501 891,115 C 985.645933014354,125.55502392344499 1096.755980861244,152.30143540669857 1191,158 C 1285.244019138756,163.69856459330143 1362.622009569378,148.3492822966507 1440,133 C 1440,133 1440,400 1440,400 Z");\n            }\n            100%{\n              d: path("M 0,400 C 0,400 0,133 0,133 C 94.34449760765548,142.1578947368421 188.68899521531097,151.31578947368422 275,150 C 361.31100478468903,148.68421052631578 439.58851674641164,136.89473684210526 528,126 C 616.4114832535884,115.10526315789474 714.9569377990431,105.10526315789475 819,112 C 923.0430622009569,118.89473684210525 1032.5837320574162,142.68421052631578 1137,149 C 1241.4162679425838,155.31578947368422 1340.7081339712918,144.1578947368421 1440,133 C 1440,133 1440,400 1440,400 Z");\n            }\n          }'
                                    }}
                              />
                              <path
                                    d="M 0,400 C 0,400 0,133 0,133 C 94.34449760765548,142.1578947368421 188.68899521531097,151.31578947368422 275,150 C 361.31100478468903,148.68421052631578 439.58851674641164,136.89473684210526 528,126 C 616.4114832535884,115.10526315789474 714.9569377990431,105.10526315789475 819,112 C 923.0430622009569,118.89473684210525 1032.5837320574162,142.68421052631578 1137,149 C 1241.4162679425838,155.31578947368422 1340.7081339712918,144.1578947368421 1440,133 C 1440,133 1440,400 1440,400 Z"
                                    stroke="none"
                                    strokeWidth={0}
                                    fill="#d62959"
                                    fillOpacity="0.53"
                                    className="transition-all duration-300 ease-in-out delay-150 path-0"
                              />
                              <style
                                    dangerouslySetInnerHTML={{
                                          __html:
                                                '\n          .path-1{\n            animation:pathAnim-1 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-1{\n            0%{\n              d: path("M 0,400 C 0,400 0,266 0,266 C 77.36842105263159,260.00956937799043 154.73684210526318,254.0191387559809 256,245 C 357.2631578947368,235.9808612440191 482.42105263157896,223.93301435406696 588,223 C 693.578947368421,222.06698564593304 779.5789473684212,232.2488038277512 866,252 C 952.4210526315788,271.7511961722488 1039.2631578947369,301.0717703349282 1135,305 C 1230.7368421052631,308.9282296650718 1335.3684210526317,287.46411483253587 1440,266 C 1440,266 1440,400 1440,400 Z");\n            }\n            25%{\n              d: path("M 0,400 C 0,400 0,266 0,266 C 71.23444976076553,268.755980861244 142.46889952153106,271.511961722488 247,257 C 351.53110047846894,242.48803827751198 489.3588516746412,210.70813397129186 582,219 C 674.6411483253588,227.29186602870814 722.0956937799043,275.6555023923445 811,284 C 899.9043062200957,292.3444976076555 1030.2583732057417,260.66985645933016 1142,251 C 1253.7416267942583,241.33014354066984 1346.870813397129,253.66507177033492 1440,266 C 1440,266 1440,400 1440,400 Z");\n            }\n            50%{\n              d: path("M 0,400 C 0,400 0,266 0,266 C 75.24401913875596,274 150.48803827751192,282 250,275 C 349.5119617224881,268 473.2918660287081,246 575,244 C 676.7081339712919,242 756.3444976076554,260 861,277 C 965.6555023923446,294 1095.33014354067,310 1196,308 C 1296.66985645933,306 1368.334928229665,286 1440,266 C 1440,266 1440,400 1440,400 Z");\n            }\n            75%{\n              d: path("M 0,400 C 0,400 0,266 0,266 C 88.57416267942583,253.34928229665073 177.14832535885165,240.69856459330146 280,251 C 382.85167464114835,261.30143540669854 499.98086124401914,294.555023923445 586,303 C 672.0191387559809,311.444976076555 726.9282296650719,295.08133971291863 825,282 C 923.0717703349281,268.91866028708137 1064.306220095694,259.11961722488036 1174,257 C 1283.693779904306,254.8803827751196 1361.846889952153,260.4401913875598 1440,266 C 1440,266 1440,400 1440,400 Z");\n            }\n            100%{\n              d: path("M 0,400 C 0,400 0,266 0,266 C 77.36842105263159,260.00956937799043 154.73684210526318,254.0191387559809 256,245 C 357.2631578947368,235.9808612440191 482.42105263157896,223.93301435406696 588,223 C 693.578947368421,222.06698564593304 779.5789473684212,232.2488038277512 866,252 C 952.4210526315788,271.7511961722488 1039.2631578947369,301.0717703349282 1135,305 C 1230.7368421052631,308.9282296650718 1335.3684210526317,287.46411483253587 1440,266 C 1440,266 1440,400 1440,400 Z");\n            }\n          }'
                                    }}
                              />
                              <path
                                    d="M 0,400 C 0,400 0,266 0,266 C 77.36842105263159,260.00956937799043 154.73684210526318,254.0191387559809 256,245 C 357.2631578947368,235.9808612440191 482.42105263157896,223.93301435406696 588,223 C 693.578947368421,222.06698564593304 779.5789473684212,232.2488038277512 866,252 C 952.4210526315788,271.7511961722488 1039.2631578947369,301.0717703349282 1135,305 C 1230.7368421052631,308.9282296650718 1335.3684210526317,287.46411483253587 1440,266 C 1440,266 1440,400 1440,400 Z"
                                    stroke="none"
                                    strokeWidth={0}
                                    fill="#d62959"
                                    fillOpacity={1}
                                    className="transition-all duration-300 ease-in-out delay-150 path-1"
                              />
                        </svg>

                  </footer>
            </>
      )
}

export default About;