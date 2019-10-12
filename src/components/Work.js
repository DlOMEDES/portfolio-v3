import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
const { colors } = theme

const Work = () => {
  return (
    <WorkContainer>
      <WorkHead>
        <WorkTitle>Work</WorkTitle>
        <WorkArrow></WorkArrow>
        <WorkRectangle></WorkRectangle>
      </WorkHead>
      <WorkGrid>
        <Project href="work/#">Ecommerce</Project>
        <Project href="work/#"></Project>
        <Project href="work/#"></Project>
        <Project href="work/#"></Project>
        <Project href="work/#"></Project>
        <Project href="work/#"></Project>
      </WorkGrid>
    </WorkContainer>
  )
}

export default Work

// styles

const WorkContainer = styled.section`
  position: relative;
`

const WorkHead = styled.div`
  position: absolute;
  top: -190px;
`

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 150px);
  grid-gap: 20px;
`
const WorkRectangle = styled.span`
  position: absolute;
  width: 35px;
  height: 55px;
  background: rgba(229, 64, 84, 0.5);
  top: -20px;
  left: 24px;
`
const WorkArrow = styled.span`
  position: absolute;
  top: 35px;
  left: -3px;
  width: 0;
  height: 0;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-top: 45px solid rgba(229, 64, 84, 0.5);
`
const WorkTitle = styled.h2`
  position: absolute;
  z-index: 1;
  color: ${colors.white};
`

const Project = styled.a`
  padding: 40px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 1);
    /* box-shadow: 0px 40px 74px 24px rgba(0, 0, 0, 0.08); */
  }

  &:nth-child(1) {
    background: url("https://cdn.dribbble.com/users/374494/screenshots/7185085/media/6c22c6a8a2427c9dd8e8cc2bde5cb571.png")
      center center no-repeat;
    background-size: 100%;
    grid-column: 1/3;
    grid-row: 1/1;
  }
  &:nth-child(2) {
    background: url("https://cdn.dribbble.com/users/14268/screenshots/5418845/northface-2.gif")
      center center no-repeat;
    grid-column: 3/3;
    grid-row: 1/4;
  }
  &:nth-child(3) {
    background: url("https://cdn.dribbble.com/users/1200964/screenshots/3812962/todo_concept_iphonex_30fps.gif")
      center center no-repeat;
    grid-column: 1/2;
    grid-row: 2/5;
  }
  &:nth-child(4) {
    background: url("https://cdn.dribbble.com/users/757683/screenshots/7158635/media/24fc328a425d7925e1fc7bdb59ef69b6.jpg")
      center center no-repeat;
    grid-column: 2/3;
    grid-row: 2/3;
  }
  &:nth-child(5) {
    background: url("https://cdn.dribbble.com/users/14268/screenshots/5367995/grabient_2x.png")
      center center no-repeat;
    background-size: 100%;
    grid-column: 2/3;
    grid-row: 3/5;
  }
  &:nth-child(6) {
    background: url("https://cdn.dribbble.com/users/32512/screenshots/6599222/icon_dark_green_by_milkinside.gif")
      center center no-repeat;
    background-size: 100%;
    grid-column: 3/4;
    grid-row: 4/5;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    &:hover {
      background: rbga(255, 255, 255, 0.8);
    }
  }
`
