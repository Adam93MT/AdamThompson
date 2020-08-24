import React from "react"
import {useCustomProp} from '../../../hooks/useCustomProperty';
import './portfolio-card.scss';
import { Link } from "gatsby";

const PortfolioCard = ({ title, tagline, color, imgSrc, link }) => {
  const id = title.toLowerCase().replace(/( )+/g, '-')
  const highlighted_card = 'new-visions'
  const isHighlightedCard = id === highlighted_card;
  const colorRef = useCustomProp('--portfolio-color', color)

  return (
    <Link ref={colorRef} to={link} id={id} className={`portfolio-card clickable ${isHighlightedCard ? 'double-wide' : ''}`}>
      <div className="portfolio-card-text">
        <h2 className="portfolio-card-title">{title}</h2>
        <br/>
        <span className="portfolio-card-tagline">{tagline}</span>
      </div>
      <div className="portfolio-card-image-wrapper" >
        <picture className="portfolio-card-picture">
          <source srcset={imgSrc.srcSetWebp} type="image/webp" />
          <source srcset={imgSrc.srcSet} type="image/png" />
          <img className="portfolio-card-image" src={imgSrc.src} alt={`${title}`} />
        </picture>
      </div>
    </Link>
  )
}

export default PortfolioCard
