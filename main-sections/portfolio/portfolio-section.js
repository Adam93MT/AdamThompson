import React from "react"
import Section from "../../templates/section/section";
import PortfolioCard from "./portfolio-card/portfolio-card";
import styles from './portfolio-section.module.scss';

import { portfolio } from '../../meta/portfolio-meta'

const PortfolioSection = ({ data }) => {
  return (
    <Section title="UX Case Studies" className={styles.section} id="portfolio">
      <div className={styles.portfolio_cards_container}>
      {
        portfolio.sort(sortDateDesc).map((page) => (
          <PortfolioCard
            key={page.title}
            title={page.title}
            tagline={page.tagline}
            color={page.color}
            cover={`/images/portfolio/cover/${page.cover}`}
            link={`portfolio/${page.brand}`}
            imgSrc={`/images/portfolio/cover/${page.cover}`}
          >
          </PortfolioCard>
        ))
      }
      </div>
    </Section>
  )
}

function sortDateDesc(a,z) {
  a = new Date(a)
  z = new Date(z)
  return a.getTime() > z.getTime() ? 1 : -1
}

export default PortfolioSection
