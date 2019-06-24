import React from "react"
import Card from "../card/card";
import Img from "gatsby-image"
import './resume-card.scss';

const ResumeCard = ({id, logoSrc, title, location, term, position, summary, bullets}) => {

  return (
    <Card 
      id={id}
      className={'resume-card'}
    >
        <div className="resume-header">
          {/* <img className="logo" src={logoSrc} alt={title}/> */}
          <h1 className="company">{title}</h1>
          <span className="time-and-place">{location} | {term}</span>
        </div>
        <h2 className="position">{position}</h2>
        <p className="summary">
          {summary}
        </p>
        {/* {bullets} */}
    </Card>
  )
}

export default ResumeCard
