import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import SectionTitle from "../components/SectionTitle"
import { device } from "../utils/variables"
import { graphql, Link, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const { colors, shadows } = theme
// styles

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 16rem);
  grid-gap: 3rem;
  padding-top: 25rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 32rem);
    grid-gap: 8rem;
  }

  @media ${device.phone} {
    padding-top: 20rem;
  }
`

const ShapeContainer = styled.div`
  width: 16rem;
  height: 16rem;
  position: absolute;
  top: -5rem;
  left: -2rem;
  border-radius: 50%;
  display: inline-block;
  box-shadow: ${shadows.sections} rgb(${colors.violet}, 0.3);

  @media ${device.tablet} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const WorkHead = styled.div`
  position: relative;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`
const WorkContainer = styled.section`
  position: relative;
  @media ${device.tablet} {
    margin: 0 auto;
  }
`
const CardOverlay = styled(Link)`
  width: 100%;
  height: 100%;
  background: rgba(${colors.midnightPurple}, 0.97);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: -100%;
  transition: all 0.4s ease-in-out;

  h3 {
    color: rgb(${colors.white});
    text-transform: uppercase;
  }

  h5 {
    color: rgb(${colors.ashblueManatee});
  }

  @media ${device.tablet} {
    background: rgba(${colors.midnightPurple}, 0.7);
    left: 0%;
  }
`

const Card = styled(BackgroundImage)`
  position: relative;
  text-align: center;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    ${CardOverlay} {
      padding: 2rem;
      left: 0;
    }
  }

  &:nth-child(1) {
    background: black;
    background-size: cover;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  &:nth-child(2) {
    background: aqua;
    grid-column: 3/4;
    grid-row: 1/3;
    background-size: cover;
  }
  &:nth-child(3) {
    background: yellow;
    grid-column: 4/5;
    grid-row: 1/-1;
    background-size: cover;
  }
  &:nth-child(4) {
    background: purple;
    grid-column: 1/2;
    grid-row: 3/5;
    background-size: cover;
  }
  &:nth-child(5) {
    background: Brown;
    background-size: 100%;
    grid-column: 2/4;
    grid-row: 3/5;
    background-size: cover;
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    @media ${device.tablet} {
      grid-column: auto;
      grid-row: auto;

      &::after {
        opacity: 0.2 !important;
      }
    }
  }
`
// const WorkButton = styled(Button)`
//   text-align: center;

//   @media ${device.tablet} {
//   }
// `
const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              context
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <WorkContainer id="work" className="sectionPad">
      <WorkHead>
        <SectionTitle title="Projects" />
        <ShapeContainer />
      </WorkHead>

      <WorkGrid>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Card
              fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
              key={edge.node.id}
            >
              <CardOverlay to={`/project/${edge.node.fields.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <h5>{edge.node.frontmatter.context}</h5>
              </CardOverlay>
            </Card>
          )
        })}
      </WorkGrid>
      {/* <WorkButton>
        <Link to="/projects">ALL PROJECTS</Link>
      </WorkButton> */}
    </WorkContainer>
  )
}

export default Work
