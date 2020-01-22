import React from "react"
import styled from "styled-components"
import theme from "../../utils/theme"
import { FaFileAlt, FaWordpress, FaMobile } from "react-icons/fa"
const Service = () => {
  return (
    <ServiceContainer id="services">
      <ServiceHead>
        <ServiceTitle>Services</ServiceTitle>
        <ServiceSquare>
          <SquareSpan />
        </ServiceSquare>
      </ServiceHead>
      <ServiceContent>
        <ServiceBox>
          <Icon>
            <FaFileAlt size="50px" />
          </Icon>

          <h3>Design to Code</h3>
          <h5>Modern, semantic and lightweight</h5>
          <p>
            I like to work closely with designers to faithfully translate their
            designs right down to the last pixel. On a daily basis you'll find
            me using HTML, SCSS / BEM, JavaScript / ES2016 and Git with VS Code,
            Neat, WordPress and Vue / Nuxt, in order to bring creative designs
            to life.
          </p>
        </ServiceBox>
        <ServiceBox>
          <Icon>
            <FaWordpress size="50px" />
          </Icon>
          <h3>CMS Ready</h3>
          <h5>Tailored to your needs</h5>
          <p>
            A majority of websites I build today are content managed as
            standard. I find that the WordPress platform is often a great choice
            because it's mature and stable with a built-in REST API. It provides
            my client's with full editorial control in a way that's intuitive
            and friendly.
          </p>
        </ServiceBox>
        <ServiceBox>
          <Icon>
            <FaMobile size="50px" />
          </Icon>
          <h3>Fully Responsive</h3>
          <h5>Smartphones & other devices</h5>
          <p>
            Many websites today still lack adequate support for mobile browsing.
            I aim to build in this support from the very beginning. An effective
            grid system with progressive enhancement can ensure a great
            experience on new and older web browsers alike.
          </p>
        </ServiceBox>
      </ServiceContent>
    </ServiceContainer>
  )
}

export default Service

const { colors, shadows } = theme
const Icon = styled.div`
  margin: 20px 0;
`
const ServiceBox = styled.div`
  transition: all 0.4s ease-in-out;
  padding: 30px;

  h3 {
    color: rgb(${colors.white});
  }

  h5 {
    color: rgb(${colors.violet});
  }

  &:hover {
    background-color: rgb(${colors.midnightPurple});
    /* box-shadow: rgba(2, 12, 27, 0.8) 0px 0px 30px -10px; */
    box-shadow: ${shadows.boxes} rgba(${colors.violet}, 0.3);
    border-bottom: 3px solid rgba(${colors.violet}, 0.5);
  }
`
const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  line-height: 1.5;
  letter-spacing: 1px;
`
const ServiceHead = styled.div`
  padding-bottom: 200px;
  position: relative;
`
const ServiceTitle = styled.h2`
  z-index: 1;
  color: rgb(${colors.white});
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  top: 40px;
`
const SquareSpan = styled.span`
  /* border: 5px solid rgba(177, 122, 204, 0.2); */
  box-shadow: ${shadows.sections} rgb(${colors.violet});
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;
  left: -18px;
`
const ServiceSquare = styled.div``

const ServiceContainer = styled.section`
  position: relative;
  margin-bottom: 350px;
`
