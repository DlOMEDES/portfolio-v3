import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import Layout from "../layout"
const { colors } = theme

const ShortInfo = styled.section`
  width: 80%;
  padding: 1rem;
  margin: 15rem auto;
  text-align: center;
`

const Hello = styled.h1`
  font-size: 1.25em;
  line-height: 1.3;
  color: rgb(${colors.ashblueManatee});
`

const ShowCase = styled.section`
  width: 100%;
  margin: 0 auto;
  ul {
    width: 90%;
    margin-left: 5%;
  }

  .projects {
    display: flex;
    flex-direction: column;
    text-align: left;
    background: $white;
    margin-bottom: 5em;
    box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);

    .project_thumb {
      margin: 0 auto 1.5em auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      img {
        /* width: 100%; */
        object-fit: contain;
      }
    }

    .project_desc {
      margin: 0 5% 10% 5%;

      h1 {
        /* font-family: $main_font */
        font-size: 1.5em;
        margin-bottom: 0.5em;
        color: rgb(${colors.midnightPurple});
      }
      .project_info {
        font-family: rgb(${colors.violet});
        font-weight: 300;
        color: rgb(${colors.violet});
        margin-bottom: 1em;
        line-height: 1.35;
        font-size: 1em;
      }
      .project_icon {
        width: 50px;
        height: 50px;
        margin-bottom: 2em;
      }
    }
  }
`

const fortheblog = () => {
  return (
    <Layout>
      <ShortInfo>
        <Hello>
          Welcome to fortheBlog, where I write about web development.
        </Hello>
      </ShortInfo>

      <ShowCase>
        <ul>
          <li className="projects">
            <article>
              <div className="project_thumb">
                <img
                  src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </div>
              <div className="project_desc">
                <h2>blog post 1</h2>
                <p className="project_info">
                  This is a blog post showcasing available meals and a way to
                  get in touch with the best chefs in the country.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </ShowCase>
    </Layout>
  )
}

export default fortheblog
