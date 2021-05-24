import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Layout from "../layout"
import heroImage from "../images/me-ctrlparkcopy.png"
import { device } from "../utils/variables"
import Tech from "../layout/Tech"
const { colors } = theme

const Article = styled.article`
  transition: all 0.4s ease-in-out;
  margin-top: 20rem;
  &:last-child {
    margin: 0;
  }
  @media ${device.portrait} {
    margin-top: 5rem;
  }
  h4 {
    color: rgba(${colors.violet}, 0.2);
    padding-bottom: 1rem 0;
    position: absolute;
    font-size: 21rem;
    font-weight: 700;
    top: 12rem;

    span {
      color: rgba(${colors.violet}, 0.4);
    }
    @media ${device.portrait} {
      font-size: 11rem;
      top: 0rem;
      line-height: 0.8;
    }
  }

  h5 {
    color: rgb(${colors.white});
    font-size: 2rem;
    padding: 1rem 0;
    text-transform: none;
  }
`
const AboutContent = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  letter-spacing: 0.1rem;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 20rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    max-width: 80%;
    margin: 0 auto;
  }

  @media ${device.phone} {
    max-width: 100%;
    padding-top: 15rem;
  }
`

const AboutContainer = styled.section`
  position: relative;

  @media ${device.tablet} {
    margin-top: 5rem;
  }
`

const HeroImage = styled.div`
  margin: 0 auto;
  img {
    width: 50rem;
    border-radius: 1rem;
    background: rgb(${colors.ashblueManatee});
  }

  @media ${device.tablet} {
    display: none;
  }
`

const About = () => {
  return (
    <Layout>
      <AboutContainer id="about">
        <AboutContent>
          <Article>
            <h4>
              ABOUT <span>ME</span>
            </h4>
            <h5>
              My name is Diomedes Lajara. I'm a Frontend Developer located in
              Philadelphia.
            </h5>
            <p>
              I create User Interfaces using web technologies. Taking design
              concepts and translating them into live websites is my favorite
              process. what i like to create or work on and why. a small
              backstory of when i started. what i learned.
            </p>
            <br />
            <p>what i know now. where ive work. what is my focus.</p>
          </Article>
          <HeroImage>
            <img src={heroImage} alt="" />
          </HeroImage>
        </AboutContent>
      </AboutContainer>
      <Tech />
    </Layout>
  )
}

export default About
