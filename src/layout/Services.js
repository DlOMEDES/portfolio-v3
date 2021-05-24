import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import SectionTitle from "../components/SectionTitle"
import ServiceBox from "../config/service-box"
import { device } from "../utils/variables"

const { colors, shadows } = theme

const Article = styled.article`
  transition: all 0.4s ease-in-out;
  padding: 4.5rem 3rem;
  margin: 0 3rem 0 0;

  &:last-child {
    margin: 0;
  }

  h4 {
    color: rgb(${colors.violet});
    padding-bottom: 1rem 0;
  }

  h5 {
    color: rgb(${colors.white});
    font-size: 2rem;
    padding: 1rem 0;
  }

  @media ${device.tablet} {
    margin: 0;
  }
`
const ServiceContent = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  letter-spacing: 0.1rem;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 22rem;

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
const ServiceHead = styled.div`
  position: relative;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`

const ShapeContainer = styled.div`
  box-shadow: ${shadows.sections} rgba(${colors.violet}, 0.3);
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: -5rem;
  left: -2rem;

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const ServiceContainer = styled.section`
  position: relative;
`

const Services = () => {
  return (
    <ServiceContainer id="Services" className="secMargin">
      <ServiceHead>
        <SectionTitle title="What I do" />
        <ShapeContainer />
      </ServiceHead>
      <ServiceContent>
        {ServiceBox.map((box, index) => (
          <Article key={index}>
            <h4>{box.title}</h4>
            <h5>{box.subtitle}</h5>
            <p>{box.text}</p>
            <br />
            <p>{box.extraText}</p>
          </Article>
        ))}
      </ServiceContent>
    </ServiceContainer>
  )
}

export default Services
