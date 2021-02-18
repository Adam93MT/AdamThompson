import React from "react"
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
import T from "../components/Resume/tool/tool"
import ResumeHeader from "../components/Resume/resume-header";
import ResumeEntry from "../components/Resume/resume-entry/resume-entry";
import ProjectEntry from "../components/Resume/project-entry/project-entry";
import * as resumeJson from '../data/resume.json';
import * as projectsJson from '../data/projects.json';

const resumeData = resumeJson.default
const projectsData = projectsJson.default

const realJobs = Object.values(resumeData.experience).filter(job => job.show).filter(job => !job.isCoop)
const coopJobs = Object.values(resumeData.experience).filter(job => job.show).filter(job => job.isCoop)

console.log(realJobs, coopJobs);

class ResumePage extends React.Component {

  constructor() {
    super()
    this.shouldRenderResume = true;
  }

  _ResumeJSX = (
    <div className="resume-container">
      <Head><title>Adam Thompson Resume</title></Head>
      <div className="resume-page" id="page-1">
        <ResumeHeader />
        <div className="resume-body">
          {/* <div className="summary ats-only">{resumeData.blurb}</div> */}
          <div className="column" id="column-left">

            {/* EXPERIENCE */}
            <div className="column-section" id="experience">
              <h2 className="section-header">Professional Experience</h2>
              <div className="column-section-contents">
                {
                  realJobs.map(job => (
                    <ResumeEntry
                      header1={job.company}
                      header2={job.position}
                      aside={`${job.term} | ${job.location}`}
                      contentArray={job.bullets}
                    />
                  ))
                }
              </div>

              <div className="column-section" id="coop">
                <h2 className="section-header">Co-op experience</h2>
                <div className="column-section-contents">
                {
                    coopJobs.map(job => (
                      <ResumeEntry
                        header1={job.company}
                        header2={job.position}
                        aside={`${job.term} | ${job.location}`}
                        contentArray={job.bullets}
                        isCompact={job.isCoop}
                      />
                    ))
                  }
                </div>
              </div>
                {/* <div className="column-subsection-label">
                  <h3>Co-op Work</h3>
                </div> */}
                
            </div>

            {/* EDUCATION */}
            <div className="column-section " id="education">
              <h2 className="section-header">Education</h2>
              <div className="column-section-contents">
                <ResumeEntry
                  header1={resumeData.education.uwaterloo.company}
                  header2={resumeData.education.uwaterloo.position}
                  aside={resumeData.education.uwaterloo.class}
                  contentArray={[
                    resumeData.education.uwaterloo.summary
                  ]}
                />
              </div>
            </div>

            {/* PROJECTS */}
            <div className="column-section " id="projects">
              <h2 className="section-header">Projects</h2>
              <div className="column-section-contents">
                {Object.values(projectsData.projects).map(project => (
                  project.showOnResume && 
                  <ResumeEntry
                    header1={project.name}
                    aside={project.tools.join(', ')}
                    contentArray={[project.description]}
                    isCompact={true}
                  />
                ))}
              </div>
            </div>

            {/* TOOLBOX */}
            <div className="column-section" id="tools">
              <h2 className="section-header">Skills</h2>
              <div className="column-section-contents">
                {resumeData.toolbox.map(tool => {
                  return <T>{tool}</T>
                })}
              </div>
            </div>




            {/* AWARDS */}
            {/* <div className="column-section " id="projects">
              <h2 className="section-header">Awards</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.awards).map(award => (
                  award && <ResumeEntry
                    entryClass="project-entry"
                    title={award.title}
                    location={award.date}
                    bullets={[award.description]}
                  />
                ))}
              </div>
            </div> */}



            {/* VOLUTEER */}
            {/* <div className="column-section " id="volunteer">
              <h2 className="section-header">Volunteer</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.volunteer).map(volunteer => {
                  return <ResumeEntry
                    entryClass="volunteer-entry"
                    title={volunteer.title}
                    location={volunteer.location}
                  />
                })}
              </div>
            </div> */}


            {/* <div className="resume-footer">
              <a href="http://thesonofthomp.com">thesonofthomp.com</a>
              <a href="mailto:adam@thesonofthomp.com">adam@thesonofthomp.com</a>
              <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
            </div> */}

          </div>

        </div>
        <div className="resume-footer">
          <a href="https://www.linkedin.com/in/adammthompson/">
            <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
              /adammthompson
            </a>
          <a href="https://www.twitter.com/thesonofthomp/">
            <FontAwesomeIcon icon={faTwitter} size="sm" />
              @thesonofthomp
            </a>
          <a href="https://www.github.com/thesonofthomp">
            <FontAwesomeIcon icon={faGithub} size="sm" />
              @thesonofthomp
            </a>
          <a href="https://codepen.io/TheSonOfThomp/">
            <FontAwesomeIcon icon={faCodepen} size="sm" />
              thesonofthomp
            </a>
        </div>
      </div>


      {/* <div className="resume-page" id="page-2">
        <div className="resume-body full-width">
          <div className="column" id="column-right"> */}




      {/* VOLUTEER */}
      {/* <div className="column-section " id="volunteer">
              <h2 className="section-header">Volunteer</h2>
              <div className="column-section-contents">
                {Object.values(resumeData.volunteer).map(volunteer => {
                  return <ResumeEntry
                    entryClass="volunteer-entry"
                    title={volunteer.title}
                    location={volunteer.location}
                    bullets={[volunteer.description]}
                  />
                })}
              </div>
            </div> */}


      {/* </div> 
        </div>
        <div className="resume-footer">
          <a href="http://thesonofthomp.com">thesonofthomp.com</a>
          <a href="mailto:adam@thesonofthomp.com">adam@thesonofthomp.com</a>
          <a href="tel:13323335780" id="phone">+1-332-333-5780</a>
        </div>
      </div> */}

    </div>
  )


  render() {
    let _toRenderJSX = this._ResumeJSX
    return (_toRenderJSX)
  }
}

export default ResumePage