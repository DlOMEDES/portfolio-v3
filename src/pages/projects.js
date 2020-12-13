import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Layout from "../layout"
import LRglasses from "../images/LR-Glasses.png"
import Head from "components/Head"
import { Link } from "gatsby"
import FontOne from "../images/font-oswald.png"
import FontTwo from "../images/font-raleway.png"
import projectWire from "../images/wireframe.png"

const { colors } = theme

const GridIt = styled.div`
  display: grid;
  grid-template-rows: 20vw min-content 40vw repeat(2, min-content);
  grid-template-columns:
    [fullstart] minmax(3rem, 1fr) [centerstart] repeat(
      8,
      [colstart] minmax(min-content, 12rem) [colend]
    )
    [centerend] minmax(3rem, 1fr) [fullend];
  margin-top: 12rem;
`
const TopBanner = styled.section`
  /* background: lightgreen; */
  grid-column: fullstart/fullend;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);

  .box {
    margin-left: -5rem;
    border-radius: 1rem;
    z-index: 0;
    box-shadow: 10px 10px 0px 5px rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    p {
      margin-left: 2rem;

      span {
        color: rgb(${colors.violet});
        margin-right: 0.5rem;
      }
    }
  }
`
const ImgInside = styled.div`
  grid-column: 1/5;
  grid-row: 1/-1;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(26, 21, 37)
  );
  /* z-index: 0; */
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 0.5rem;
    position: sticky;
  }
`
const Date = styled.div`
  grid-column: 5/6;
  grid-row: 2 / span 1;
`
const Role = styled.div`
  grid-column: 5/6;
  grid-row: 4 / span 1;
`
const Context = styled.div`
  grid-column: 5/6;
  grid-row: 6 / span 1;
`

const Intro = styled.section`
  /* background: teal; */
  grid-column: colstart 2 / colend 7;

  h1 {
    font-size: 4.5rem;
  }

  button {
    padding: 0.5rem;
    height: 5rem;
    width: 15rem;
    cursor: pointer;

    border-radius: 0.5rem;
    background: transparent;
    font-size: 1.8rem;
    transition: all 0.4s ease-in-out;

    &:hover {
      background: rgba(177, 122, 204, 0.5);
      color: rgb(${colors.white});
      border: 0.1rem solid transparent;
    }
    a {
      color: rgb(${colors.white});
    }
  }

  .web {
    border: 0.1rem solid rgb(${colors.violet});
    margin-right: 5rem;
  }

  .code {
    border: 0.1rem solid rgb(${colors.ashblueManatee});
    margin: 1rem 0;
  }
`
const ProjectContent = styled.section`
  grid-column: colstart 2 / colend 4;
  align-self: center;

  h2 {
    font-size: 3rem;
    margin-top: 3rem;
  }
`
const ProjectMock = styled.section`
  background: salmon;
  grid-column: colstart 6 / fullend;
  margin: 0;
  height: 55rem;
  width: 40rem;
  align-self: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Colors = styled.section`
  grid-column: centerstart/centerend;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 10rem;
`

const ProjectColors = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .colorHex {
    color: white;
  }

  &.color-1 {
    background-color: rgb(${colors.ashblueManatee});
    border: 1px solid rgb(${colors.ashblueManatee});
  }

  &.color-2 {
    background-color: rgb(${colors.violet});
    border: 1px solid rgb(${colors.violet});
  }
  &.color-3 {
    background-color: #bba57c;
    border: 1px solid rgb(${colors.midnightPurple});
  }
`

const Fonts = styled.section`
  grid-column: colstart 2 / colend 7;
  display: flex;
  justify-content: space-evenly;

  .fontOne,
  .fontTwo {
    padding: 2rem;
    background: white;
    margin: 1rem;
  }
`

const lensesEmail = () => {
  return (
    <Layout>
      <Head title="LR Promo Email Template" />
      <GridIt>
        <TopBanner>
          <ImgInside>
            <img src={LRglasses} alt="" />
          </ImgInside>
          <Date className="box">
            <p>
              <span>Date</span>October 2019
            </p>
          </Date>
          <Role className="box">
            <p>
              <span>Role</span>Email Developer
            </p>
          </Role>
          <Context className="box">
            <p>
              <span>Context</span>Personal Project
            </p>
          </Context>
        </TopBanner>

        <Intro className="mSec10">
          <h1 className="mbSm">LR Lenses</h1>
          <p className="mbLg">
            LRL aims to be a modern, solid and easy-to-use web-based software to
            manage content. With its intuitive dashboard and hand-crafted UI,
            Lato helps every customer to easily manage every kind of content
            he/she needs.
          </p>

          <button className="web">
            <Link to="https://dlomedes.github.io/lr-html-email/">
              Visit Website
            </Link>
          </button>
          <button className="code">
            <Link to="https://github.com/DlOMEDES/lr-html-email">
              View Code
            </Link>
          </button>
        </Intro>
        <ProjectContent className="mSec10">
          <h2 className="mbMd">Built with customers in mind, and Love.</h2>

          <p className="mbSm">
            First Lato is modular: every part of the application is a separate
            module with its purpose.
          </p>

          <p className="mbSm">
            As the Lead Front-end Developer, my main task is to build the
            lato_view module, which is responsible of the entire Look and Feel
            of the application.
          </p>

          <p className="mbSm">
            I built the entire UI/UX of the admin dashboard, including a
            responsive custom theme, a custom flex grid system, custom form
            validation, dynamic themes and more.
          </p>
        </ProjectContent>
        <ProjectMock className="mSec10">
          <img src={projectWire} alt="" />
        </ProjectMock>
        <Colors className="mSec10">
          <ProjectColors className="color-1">
            <p className="colorHex">#colorHEX</p>
          </ProjectColors>
          <ProjectColors className="color-2" />
          <ProjectColors className="color-3" />
        </Colors>
        <Fonts className="mSec10">
          <div className="fontOne">
            <img src={FontOne} alt="" />
          </div>
          <div className="fontTwo">
            <img src={FontTwo} alt="" />
          </div>
        </Fonts>
      </GridIt>
    </Layout>
  )
}

export default lensesEmail