import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm <br />
        Nasim <br />
        Doing develope Services.
      </SectionTitle>
      <SectionText>
        +3 years of experience creating successful and innovative web page
        products.
        <br />
        Also involved in several extensive cross-organizational and
        customer-centric projects to identify, prioritize, and develop
        solutions.
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero;