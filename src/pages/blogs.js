import React from "react"
import styled from "styled-components"
import theme from "utils/theme"
import Layout from "../layout"
import { device } from "utils/variables"
import Head from "components/Head"

const { colors } = theme

const ShortInfo = styled.section`
  width: 80%;
  padding: 1rem;
  margin: 15rem auto;
  text-align: center;
`

const ShowCase = styled.section`
  width: 100%;
  margin: 0 auto;

  .postList {
    display: flex;
    flex-direction: column;
    text-align: left;

    article {
      position: relative;
      @media ${device.minDesk} {
        display: flex;
        align-items: center;
      }
    }

    .post-title {
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      width: 100%;
      z-index: -1;

      h2 {
        color: rgb(${colors.midnightPurple});
      }

      @media ${device.minDesk} {
      }
    }

    .postImg {
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.6);
      position: absolute;
      background: rgb(${colors.ashblueManatee});
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 30rem;
      height: 12rem;
      display: flex;
      flex-direction: column;
      z-index: -2;

      img {
        width: 100%;
        object-fit: cover;
        height: 12rem;
      }
      @media ${device.minDesk} {
        width: 35rem;
        height: 25rem;
        z-index: -3;

        img {
          height: 35rem;
        }
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, #eaee44, #33d0ff);
        opacity: 0.6;
      }
    }

    .postDesc {
      padding: 1rem;
      background: white;
      margin: 5rem 0;
      z-index: -3;
      position: relative;
      @media ${device.minDesk} {
        padding: 5rem 1rem;
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.6);
        z-index: -2;
        position: absolute;
        top: -5rem;
        right: 0;
      }

      .project_info {
        font-family: rgb(${colors.violet});
        font-weight: 300;
        color: rgb(${colors.midnightPurple});
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

const blogs = () => {
  return (
    <Layout>
      <Head title="F.T.B" />
      <ShortInfo>
        <p>Page under construction</p>
      </ShortInfo>

      <ShowCase>
        <ul>
          <li className="postList">
            <article>
              <a href="/" className="post-title">
                <h2>blog post 1</h2>
              </a>

              <div className="postImg">
                <img
                  src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                />
              </div>
              <div className="postDesc">
                <p className="project_info">
                  This is a blog article Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Iure eligendi dicta modi quo sit odio
                  placeat nihil et alias deserunt.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </ShowCase>
    </Layout>
  )
}

export default blogs
