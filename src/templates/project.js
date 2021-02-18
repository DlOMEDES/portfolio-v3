import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Layout from "../layout"
import { device, Button } from "../utils/variables"
import { graphql } from "gatsby"
import Img from "gatsby-image"
const { colors } = theme

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 50vh repeat(4, min-content);
  grid-template-columns:
    1fr [fullstart] repeat(8, [col-start] minmax(min-content, 16rem) [col-end])
    [fullend] 1fr;
`

const FeaturedImg = styled(Img)`
  grid-column: fullstart/col-end 6;
  div {
    padding-bottom: 0% !important;
  }
  picture > img {
    z-index: -1;
  }
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(26, 21, 37)
  );

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
        display: block;
      }
    }
  }
`

const Intro = styled.section`
  grid-column: col-start 1 / col-end 7;
  /* text-align: center; */
  h1 {
    color: rgb(${colors.white});
    text-transform: uppercase;
  }
`
const ProjectButton = styled(Button)`
  display: inline-block;
  margin: 1rem 1rem 0 0;

  a {
    font-weight: bold;
    padding: 1rem 5rem;
    margin: 0 3rem 0 0;
  }

  &:last-child {
    a {
      background: transparent;
      border: 0.1rem solid rgb(${colors.ashblueManatee});

      &:hover {
        color: rgba(${colors.violet}, 0.5);
        border: 0.1rem solid rgba(${colors.violet}, 0.5);
      }
    }

    @media ${device.tablet} {
      margin: 3rem 0 0 0;
    }
  }
`

const Story = styled.section`
  grid-column: fullstart/ col-end 4;
  display: flex;
  align-items: center;

  .content {
  }

  h3 {
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        challenge
        context
        date
        story
        role
      }
    }
  }
`

export default function ProjectTemplate({ data }) {
  let projects = data.markdownRemark
  let featuredImgFluid =
    projects.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <GridContainer>
        <FeaturedImg fluid={featuredImgFluid} />
        <Context>
          <p className="type">
            <span>Context </span>
            {data.markdownRemark.frontmatter.context}
          </p>
          <p className="role">
            <span>Role </span>
            {data.markdownRemark.frontmatter.role}
          </p>
          <p className="date">
            <span>Date </span>
            {data.markdownRemark.frontmatter.date}
          </p>
        </Context>
        <Intro className="mSec10">
          <h1 className="mbSm">{data.markdownRemark.frontmatter.title}</h1>
          <p className="mbLg">{data.markdownRemark.frontmatter.challenge}</p>
          <ProjectButton>
            <a href="/#">View Project</a>
          </ProjectButton>
          <ProjectButton>
            <a href="/#">View Code</a>
          </ProjectButton>
        </Intro>
        <Story className="mSec10">
          <div className="content">
            <h3 className="mbMd">Project Story</h3>
            <p className="mbSm">{data.markdownRemark.frontmatter.story}</p>
          </div>
        </Story>
        <MockFrame className="mSec10">
          {/* <img src={projectWire} alt="" /> */}
        </MockFrame>
      </GridContainer>
    </Layout>
  )
}
