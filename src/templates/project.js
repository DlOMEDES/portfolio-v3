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
  grid-column: fullstart/fullend;
  div {
    padding-bottom: 0% !important;
  }
  picture > img {
    z-index: -1;
  }

  @media ${device.tablet} {
    grid-column: fullstart/fullend;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgb(26, 21, 37)
    );
  }
`

const Context = styled.div`
  grid-column: col-start 6 / fullend;
  grid-row: 2/3;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  p {
    border-radius: 1rem;
    z-index: 0;

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
  grid-column: col-start 1 / col-end 4;
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
      margin: 5rem 0 0 0;
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro
        context
        story
        role
        tech
        codeBtn
        viewBtn
      }
    }
  }
`

export default function ProjectTemplate({ data }) {
  let projects = data.markdownRemark
  let featuredImgFluid =
    projects.frontmatter.featuredImage.childImageSharp.fluid
  let codeBtn = data.markdownRemark.frontmatter.codeBtn
  let viewBtn = data.markdownRemark.frontmatter.viewBtn

  return (
    <Layout>
      <GridContainer>
        <FeaturedImg
          fluid={featuredImgFluid}
          placeholderStyle={{ visibility: "hidden" }}
        />
        <Context>
          <p className="type">
            <span>Context </span>
            {data.markdownRemark.frontmatter.context}
          </p>
          <p className="role">
            <span>Role </span>
            {data.markdownRemark.frontmatter.role}
          </p>
        </Context>
        <Intro className="mSec10">
          <h1 className="mbSm">{data.markdownRemark.frontmatter.title}</h1>
          <p className="mbLg">{data.markdownRemark.frontmatter.intro}</p>
          <ProjectButton>
            <a href={viewBtn} target="_blank" rel="noreferrer">
              View Project
            </a>
          </ProjectButton>
          <ProjectButton>
            <a href={codeBtn} target="_blank" rel="noreferrer">
              View Code
            </a>
          </ProjectButton>
        </Intro>
        <Story>
          <div className="content">
            <h3 className="mbMd">STORY & TECH</h3>
            <p className="mbSm">{data.markdownRemark.frontmatter.story}</p>
            <p className="mbSm">{data.markdownRemark.frontmatter.tech}</p>
          </div>
        </Story>
      </GridContainer>
    </Layout>
  )
}
