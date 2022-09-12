import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListIcon, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the Frontend web development world. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <listTitle>Front-End</listTitle>
          <ListParagraph>Experience with <br/>
          React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <listTitle>Back-End</listTitle>
          <ListParagraph>Experience with <br/>
          Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <listTitle>UI/UX</listTitle>
          <ListParagraph>Experience with <br/>
          tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>

);

export default Technologies;
