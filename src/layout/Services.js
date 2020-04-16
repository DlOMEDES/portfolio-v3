import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import SectionTitle from "../components/SectionTitle"
import ServiceBox from "../../content/service-box"
import { device } from "../utils/mixins"
const Service = () => {
  return (
    <ServiceContainer id="services">
      <ServiceHead>
        <SectionTitle title="Services" />
        <ShapeContainer>
          <span />
        </ShapeContainer>
      </ServiceHead>
      <ServiceContent>
        {ServiceBox.map((box, index) => (
          <Article key={index}>
            <Icon>{box.icon}</Icon>
            <h3>{box.title}</h3>
            <h5>{box.subtitle}</h5>
            <p>{box.text}</p>
          </Article>
        ))}
      </ServiceContent>
    </ServiceContainer>
  )
}

export default Service

const { colors, shadows } = theme
const Icon = styled.span`
  font-size: 5rem;
  margin: 1rem 0 0 0;
`
const Article = styled.article`
  transition: all 0.4s ease-in-out;
  padding: 4.5rem 3rem;
  margin: 0 3rem 0 0;
  &:hover {
    transform: scale(1.1);
  }
  &:last-child {
    margin: 0;
  }

  h3 {
    color: rgb(${colors.white});
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  h5 {
    color: rgb(${colors.violet});
    font-size: 2rem;
    margin: 0.2rem;
  }

  p {
    margin: 0.2rem;
  }

  &:hover {
    background-color: rgb(${colors.midnightPurple});
    /* box-shadow: rgba(2, 12, 27, 0.8) 0px 0px 30px -10px; */
    box-shadow: ${shadows.boxes} rgba(${colors.violet}, 0.3);
    border-bottom: 0.3rem solid rgba(${colors.violet}, 0.5);
  }

  @media ${device.tablet} {
    margin: 5rem 0;
    padding: 0;

    h5 {
      font-size: 1.8rem;
    }
  }
`
const ServiceContent = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  letter-spacing: 0.1rem;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin: 15rem 0 0 0;
  }
`
const ServiceHead = styled.div`
  padding-bottom: 25rem;
  position: relative;
`

const ShapeContainer = styled.div`
  span {
    box-shadow: ${shadows.sections} rgba(${colors.violet}, 0.3);
    width: 12rem;
    height: 12rem;
    position: absolute;
    top: 0;
    left: -1.8rem;
  }
`

const ServiceContainer = styled.section`
  position: relative;
  margin-bottom: 35rem;
  @media ${device.tablet} {
    display: flex;
  }
`
