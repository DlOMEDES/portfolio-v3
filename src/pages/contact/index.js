import React from "react"
import Layout from "../../layout"
import "./styles.css"
export default function Contact() {
  return (
    <Layout>
      <section className="contact-page">
        <section className="contact-form">
          <h3>Get In Touch</h3>
          <form action="">
            <div className="form-group">
              <input type="name" className="form-control" placeholder="name" />
              <input
                type="email"
                className="form-control"
                placeholder="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>

            <button tyoe="submit" className="submit-btn btn">
              Submit Here
            </button>
          </form>
        </section>
      </section>
    </Layout>
  )
}
