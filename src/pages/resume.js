import React from "react"
import SEO from "../components/seo"
import monogram from '../images/monogram-green.svg';
import '../style/resume.scss'
import T from "../components/tool/tool"

const ResumePage = () => {
  
  return (
  <div className="resume-container">
    <SEO title="Resume" />
    <div className="resume-page" id="page-1">
      <div className="resume-header">
          <img alt="A.T. monogram" id="monogram" src={monogram}></img>
        <h1>Adam Thompson</h1>
        <div id="contacts">
          <a href="http://thesonofthomp.com" id="website">thesonofthomp.com</a>
            <a href="mailto:adam@thesonofthomp.com" id="email">adam@thesonofthomp.com</a>
          <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
        </div>
      </div>
      <div className="blurb">
        I'm a UX designer & developer seeking a role at the intersection of design and engineering. With my engineering background and experience in UX since 2013, I'm a perfect fit for a technical designer or UX engineer.
      </div>
      <div className="resume-body">
        <div className="column" id="column-left">
          <div className="column-section " id="experience">
            <h2>Experience</h2>
            <div className="column-section-contents">
              <div className="entry job-entry" id="nv">
                <div className="entry-header">
                  <h3>UX Engineer</h3>
                  <h4>New Visions for Public Schools</h4>
                  <span className="location">July 2018 - now | NYC</span>
                </div>
                <div className="bullets">
                  <ul>
                    <li>
                      Managed & led contributions to design-system component development, documentation, and cross-team collaboration.
                    </li>
                    <li>
                      Architected, and built prototype infrastructure used to quickly design and test new features and interactions.
                    </li>
                    <li>
                      Designed, prototyped, and tested numerous features, and developed a data model to define dashboard UI logic.
                    </li>

                  </ul>
                </div>
              </div>

              <div className="entry job-entry" id="music-group">
                <div className="entry-header">
                  <h3>Asst. Product Manager</h3>
                  <h4>TC Helicon</h4>
                  <span className="location">2018 | Kitchener</span>
                </div>
                <div className="bullets">
                  <ul>
                    <li>
                      Identified customer needs, and defined business strategy and product specifications based on market and customer research.
                    </li>
                    <li>
                      Developed an ROI calculation tool, now used globally to allow managers to quickly evaluate new projects based on key data.
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* <div className="entry job-entry" id="chameleon">
                <div className="entry-header">
                  <h3>Co-founder</h3>
                  <h4>Chameleon</h4>
                  <span className="location">2016 - 2018 | Waterloo</span>
                </div>
                <div className="bullets">
                  <ul>
                    <li>
                      Researched user needs and behaviours to inform product requirements, and developed a business model and market strategy based on stakeholder needs and expectations.
                    </li>
                    <li>
                      Led development of the mechanical noise-attenuation system using <T>Fusion</T> 360, designed the analog circuit to measure loudness at the ear, architected <T>Arduino</T> code to control the mechanical actuator, and built analysis software in <T>Python</T> (NumPy) to determine the Noise Reduction Ratio (NRR) of the headset.
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="entry job-entry" id="zynga">
                <div className="entry-header">
                  <h3>UX Product Manager</h3>
                  <h4>Zynga Poker</h4>
                  <span className="location">2016 | Toronto</span>
                </div>
                <div>
                  <ul>
                    <li>
                      Perfected user flows based on the results of multi-variate testing, and configured final design parameters for a social engagement feature.
                    </li>
                    <li>
                      Performed secondary user research and A/B testing define pricing for a new subscription-based revenue model.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="entry job-entry" id="noom">
                <div className="entry-header">
                  <h3>Product Designer</h3>
                  <h4>Noom</h4>
                  <span className="location">2015 | NYC</span>
                </div>
                <div className="bullets">
                  <ul>
                    <li>Simplified the core food logging experience by modifying the information architecture to better fit the mental model observed during user interviews.</li>
                  </ul>
                </div>
              </div>

              <div className="entry job-entry" id="knowroaming">
                <div className="entry-header">
                  <h3>UX Designer</h3>
                  <h4>KnowRoaming</h4>
                  <span className="location">2014 - 2015 | Toronto</span>
                </div>
                <div className="bullets">
                  <ul>
                    <li>
                      Overhauled the information architecture and UI to better align with common use cases, making the app more informative and intuitive.
                    </li>
                    <li>
                      Developed mini-sites, designed print and video marketing material, and improved product packaging design.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="entry job-entry" id="sony">
                <div className="entry-header">
                  <h3>UI Designer</h3>
                  <h4>Sony</h4>
                  <span className="location">2013 | Waterloo</span>
                </div>
                <div className="bullets">
                  <ul>
                    <li>Led UI design and front-end development for a music discovery feature in MediaGo.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      
        <div className="column" id="column-right">
          <div className="column-section " id="education">
            <h2>Education</h2>
            <div className="column-section-contents">
              <div className="entry school-entry" id="uw">
                <div className="entry-header">
                  <h3>
                    <a href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering">
                      Systems Design Engineering
                    </a>
                  </h3>
                  <h4>University of Waterloo</h4>
                </div>
                <div>
                  <i>BASc. with cognitive science minor</i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="column-section "id="projects">
            <h2>Projects</h2>
            <div className="column-section-contents">

              <div className="entry project-entry" id="chameleon">
                <div className="entry-header">
                  <h3>Chameleon</h3>
                  <span className="location">2016 - 2017</span>
                </div>
                <div>
                  <ul>
                    <li>Hearing protection that adapts to the volume of the wearer's environment.</li>
                  </ul>
                </div>
              </div>

              <div className="entry project-entry" id="zed">
                <div className="entry-header">
                  <h3>Zed</h3>
                </div>
                <div>
                  <ul>
                    <li>A JS library for rendering more realistic overlapping shadows.</li>
                  </ul>
                </div>
              </div>

              <div className="entry project-entry" id="zeplin-confluence">
                <div className="entry-header">
                  <h3>ZeplinX</h3>
                </div>
                <div>
                  <ul>
                    <li>A Confluence plugin to embed Zeplin images on a page.</li>
                  </ul>
                </div>
              </div>
              
              <div className="entry project-entry" id="sketch-batch">
                <div className="entry-header">
                  <h3>Sketch Flat Export</h3>
                </div>
                <div>
                  <ul>
                    <li>A Sketch plugin to export multiple artboards to a single directory.</li>
                  </ul>
                </div>
              </div>

              <div className="entry project-entry" id="react-synth">
                <div className="entry-header">
                  <h3>React Synth</h3>
                </div>
                <div>
                  <ul>
                    <li>A web based synthesizer with musical typing.</li>
                  </ul>
                </div>
              </div>

              {/* <div className="entry project-entry" id="tap">
                <div className="entry-header">
                  <h3>TAP Metronome</h3>
                </div>
                <div>
                  <ul>
                    <li>A simple iOS metronome app with a minimal UI.</li>
                  </ul>
                </div>
              </div> */}

              {/* <div className="entry project-entry" id="klypi">
                <div className="entry-header">
                  <h3>Klypi</h3>
                </div>
                <div>
                  <ul>
                    <li>A Safari extension for clipping online comments directly to Airtable.</li>
                  </ul>
                </div>
              </div> */}

              <div className="entry project-entry" id="smrtwatr">
            <div className="entry-header">
              <h3>SMRT WATR</h3>
            </div>
            <div>
              <ul>
                <li>An interactive water fountain, controlled by a web-app game.</li>
              </ul>
            </div>
          </div>
            </div>
          </div>
              
          <div className="column-section" id="tools">
            <h2>Toolbox</h2>
            <div className="column-section-contents">

              <T>CSS</T>
              <T>HTML</T>
              <T>Javascript</T>
              <T>Typescript</T>
              
              <T>Angular</T>
              <T>Vue</T>
              <T>Storybook</T>
              
              <T>Sass</T>
              <T>React</T>
              <T>Node</T>
              <T>D3</T>
              <T>Git</T>

              <T>Swift</T>
              <T>Python</T>
              
              <T>Sketch</T>
              <T>Zeplin</T>
              <T>InVision</T>

              <T>Photoshop</T>
              <T>Illustrator</T>
              <T>Balsamiq</T>

              <T>Excel</T>
              <T>Airtable</T>

              {/* <T>SQL</T> */}
              {/* <T>Marvel</T> */}
              {/* <T>jQuery</T> */}
              {/* <T>Arduino</T> */}
              {/* <T>Raspberry Pi</T> */}
              {/* <T>Origami</T> */}
            </div>
          </div>
        </div> 
      </div>
    </div>


    {/* <div className="resume-page" id="page-2">
      <div className="resume-body full-width">
        <div className="column" id="column-left">
          <h2>Experience</h2>
          <div className="column-section " id="experience-2">

          </div>
        </div>
      </div>
    </div> */}
  </div>
)}

export default ResumePage
