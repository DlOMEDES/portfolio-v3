import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Layout from "../layout"
import FontOne from "../images/font-oswald.png"
import FontTwo from "../images/font-raleway.png"
import projectWire from "../images/project-email.png"
import LRglasses from "../images/LR-Glasses.png"
import { device } from "../utils/variables"

const { colors } = theme

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 50vh repeat(4, min-content);
  grid-template-columns:
    1fr [fullstart] repeat(8, [col-start] minmax(min-content, 16rem) [col-end])
    [fullend] 1fr;
  margin-top: 15rem;
`

const Hero = styled.section`
  grid-column: fullstart/col-end 6;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(26, 21, 37)
  );

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    position: sticky;
    z-index: -1;
    border-radius: 0.5rem;
  }

  @media ${device.tablet} {
    grid-column: fullstart/fullend;
  }
`
const Context = styled.div`
  grid-column: col-start 7 / fullend;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  p {
    margin-left: -3rem;
    border-radius: 1rem;
    z-index: 0;
    box-shadow: 10px 10px 0px 5px rgba(0, 0, 0, 0.4);
    padding: 3rem 1rem;

    span {
      color: rgb(${colors.white});
      margin: 0 0.5rem 0 2rem;
    }
  }

  @media ${device.tablet} {
    margin: 0;
    grid-column: col-start 2 / col-end 7;

    display: flex;
    flex-direction: row;
    p {
      margin: 0;
      box-shadow: none;
      padding: 1rem;

      span {
        margin: 0;
      }
    }
  }
`

const Intro = styled.section`
  grid-column: col-start 2 / col-end 7;

  h2 {
    color: rgb(${colors.white});
    text-transform: uppercase;
  }
`
const Story = styled.section`
  grid-column: fullstart/ col-end 4;
  display: flex;
  align-items: center;

  .content {
    padding: 1vh 5vw;
  }

  h4 {
    color: rgb(${colors.white});
  }

  @media ${device.tablet} {
    grid-column: col-start 2 / col-end 7;

    .content {
      padding: 0;
    }
  }
`
const MockFrame = styled.div`
  grid-column: col-start 5 / fullend;

  display: grid;
  align-items: center;
  img {
    width: 100%;
  }

  @media ${device.tablet} {
    grid-column: col-start 2 / col-end 7;
  }
`
const Colors = styled.section`
  grid-column: col-start 2 / col-end 7;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 5rem;

  .color {
    background: brown;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hexColor {
    color: white;
  }
`
const Fonts = styled.section`
  grid-column: col-start 2 / col-end 7;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;

  .fontOne,
  .fontTwo {
    padding: 2rem;
    background: white;
    &:hover {
      // on hover make the images bigger and add a overlay like the project grid.
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`

export default function project2() {
  return (
    <Layout>
      <GridContainer>
        <Hero className="mSec10">
          <img src={LRglasses} alt="" />
        </Hero>
        <Context className="mSec10">
          <p className="date">
            <span>Date</span> October 2019
          </p>

          <p className="role">
            <span>Role</span> Email Developer
          </p>

          <p className="type">
            <span>Context</span> Personal Project
          </p>
        </Context>
        <Intro className="mSec10">
          <h2 className="mbSm">LR Lenses</h2>
          <p className="mbLg">
            WRITE here what i did, how and what tech i used.
            <br />
            LRL aims to be a modern, solid and easy-to-use web-based software to
            manage content. With its intuitive dashboard and hand-crafted UI,
            Lato helps every customer to easily manage every kind of content
            he/she needs.
          </p>
        </Intro>
        <Story className="mSec10">
          <div className="content">
            <h4 className="mbMd">Project Story</h4>
            <p className="mbSm">
              WRITE THE RESULTS
              <br />
              First Lato is modular: every part of the application is a separate
              module with its purpose.
            </p>
            <p className="mbSm">
              WRITE ABOUT THE COLORS USED.
              <br />
              lato_view module, which is responsible of the entire Look and Feel
              of the application.
            </p>
            <p className="mbSm">
              WRITE ABOUT THE FONTS.
              <br />I built the entire UI/UX of the admin dashboard, including a
              responsive custom theme, a custom flex grid system, custom form
              validation, dynamic themes and more.
            </p>
          </div>
        </Story>
        <MockFrame className="mSec10">
          <img src={projectWire} alt="" />
        </MockFrame>
        <Colors className="mSec10">
          <div className="color color-1">
            <p className="hexColor">Hexcolor1</p>
          </div>
          <div className="color color-2">
            <p className="hexColor">Hexcolor2</p>
          </div>
          <div className="color color-3">
            <p className="hexColor">HexColor3</p>
          </div>
          <div className="color color-4">
            <p className="hexColor">HexColor4</p>
          </div>
        </Colors>
        <Fonts className="mSec10">
          <div className="fontOne">
            <a href="https://fonts.google.com/specimen/Oswald?query=osw">
              <img src={FontOne} alt="" />
            </a>
          </div>
          <div className="fontTwo">
            <a href="https://fonts.google.com/specimen/Raleway">
              <img src={FontTwo} alt="" />
            </a>
          </div>
        </Fonts>
      </GridContainer>
    </Layout>
  )
}
