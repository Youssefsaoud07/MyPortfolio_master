import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: 75px;
  margin-left:70px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
      <MyTitleMessage>
        <div className="titleMessage">
            <div className="heading">
                <div className="main text-center mb-3">
                    Hi, I am
          <br />
                    <span>
                        <strong>Saoud Youssef</strong>
                    </span>
                </div>
                <div className="sub">
                    <Typewriter
                        options={{
                            strings: ["Web Developer", "Market Maker", "Student"],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}
                    />
                </div>
            </div>
        </div>
    </MyTitleMessage>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;