import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Layout from "../layout"
import { device } from "../utils/variables"
import { graphql } from "gatsby"

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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        challenge
        context
        date
        story
        role
      }
    }
  }
`

const ProjectTemplate = props => {
  console.log(props)
  return (
    <Layout>
      <GridContainer>
        <Hero className="mSec10">{/* <img src={LRglasses} alt="" /> */}</Hero>
        <Context className="mSec10">
          <p className="date">
            <span>Date</span>
            {props.data.markdownRemark.frontmatter.date}
          </p>

          <p className="role">
            <span>Role</span>
            {props.data.markdownRemark.frontmatter.role}
          </p>

          <p className="type">
            <span>Context</span>
            {props.data.markdownRemark.frontmatter.context}
          </p>
        </Context>
        <Intro className="mSec10">
          <h2 className="mbSm">
            {props.data.markdownRemark.frontmatter.title}
          </h2>
          <p className="mbLg">
            {props.data.markdownRemark.frontmatter.challenge}
          </p>
        </Intro>
        <Story className="mSec10">
          <div className="content">
            <h4 className="mbMd">Project Story</h4>
            <p className="mbSm">
              {props.data.markdownRemark.frontmatter.story}
            </p>
            <p className="mbSm">
              {props.data.markdownRemark.frontmatter.story}
            </p>
            <p className="mbSm">
              {props.data.markdownRemark.frontmatter.story}
            </p>
          </div>
        </Story>
        <MockFrame className="mSec10">
          {/* <img src={projectWire} alt="" /> */}
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
              {/* <img src={FontOne} alt="" /> */}
            </a>
          </div>
          <div className="fontTwo">
            <a href="https://fonts.google.com/specimen/Raleway">
              {/* <img src={FontTwo} alt="" /> */}
            </a>
          </div>
        </Fonts>
      </GridContainer>
    </Layout>
  )
}
export default ProjectTemplate
