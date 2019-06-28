import React from 'react';

import { storiesOf } from '@storybook/react';
import PortfolioCard from './portfolio-card'

storiesOf('Cards|Portfolio Card', module)
  .add('with text', () => {

    const data = {
      title: 'Lorem Dolor Co.', 
      tagline: 'Nullam quis risus eget urna mollis ornare vel eu leo.', 
      color: '#0a4ace', 
      imgSrc: `https://placehold.it/582x1200`, 
      link: '#' 
    }

    return (
      <div style={{ padding: '48px' }}>
        <PortfolioCard
          title={data.title}
          tagline={data.tagline}
          color={data.color}
          imgSrc={data.imgSrc}
          link={data.link}
        ></PortfolioCard>
      </div>
    )
  }
  )