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
  line-height: 2;

  &:last-child {
    margin: 0;
  }
  @media ${device.portrait} {
    margin-top: 7rem;
  }
  h4 {
    color: rgba(${colors.violet}, 0.1);
    padding-bottom: 1rem 0;
    position: absolute;
    font-size: 21rem;
    font-weight: 700;
    top: 9rem;
    line-height: 0.8;

    @media ${device.portrait} {
      font-size: 11rem;
      top: 0rem;
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
  padding-top: 10rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    max-width: 80%;
    margin: 0 auto;
  }

  @media ${device.phone} {
    max-width: 100%;
    padding-top: 9rem;
  }
`

const AboutContainer = styled.section`
  position: relative;

  @media ${device.tablet} {
    margin-top: 10rem;
  }
  @media ${device.portrait} {
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
              ABOUT <br />
              <span>ME</span>
            </h4>
            <h5>
              My name is Diomedes Lajara. I'm a Frontend Developer located in
              Philadelphia.
            </h5>
            <p>
              I taught myself about web design and development to solve problems
              creatively. Using web technologies I help translate ideas and
              design concepts into fully functional and useful products.
            </p>
            <br />
            <p>
              Having high attention to details helps me craft intuitive pixel
              perfect User Interfaces. I'm interested in working on progressive
              and ambitious frontend projects.
            </p>
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
