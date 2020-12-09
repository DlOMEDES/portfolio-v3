import React from "react"
import { Link } from "gatsby"

const navLinks = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 1,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 4,
    url: "/blog",
    text: "Blog",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
  },
]

const links = navLinks.map(link => {
  return (
    <li key="link.id">
      <Link to="link.url">{link.text}</Link>
    </li>
  )
})

export default function links() {
  return <ul>{links}</ul>
}
