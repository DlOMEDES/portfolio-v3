import React from "react"
import "./styles.css"
export default function form() {
  return (
    <section className="contact-form">
      <h3>Get In Touch</h3>
      <form action="https://formspree.io/f/xknpydkd" method="POST">
        <div className="form-group">
          <input type="name" className="form-control" placeholder="name" />
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
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
  )
}
