import styled from "styled-components"

export const NavContainter = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: black;
`

export const Logo = styled.div`
  img {
    width: 45px;
  }
`

export const NavList = styled.ol`
  display: flex;

  li {
    margin: 0 10px;
  }
  li:before {
    content: "0" counter(item) ".";
    color: white;
    font-size: 12px;
  }
  a {
    padding: 12px 10px;
  }
`
