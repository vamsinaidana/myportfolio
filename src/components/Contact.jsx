import React, { useState } from "react";

const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const subject = encodeURIComponent(
      `Portfolio Enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Hello Vamsi,

I would like to connect with you regarding a project / opportunity.

Name: ${name}
Email: ${email}

Message:
${message}

Regards,
${name}`
    );

    window.location.href =
      `mailto:vamsinaidana@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <div>
      <section className="contact-section projects-heading-new scroll-reveal reveal-bottom" id="contact">

      {/* Background Effects */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="container">

        {/* Heading */}
        <div className="contact-heading">

          <span className="contact-eyebrow">
            <i className="bi bi-chat-dots-fill"></i>
            GET IN TOUCH
          </span>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Have a project idea, freelance opportunity, or just want to
            discuss something interesting? I'd love to hear from you.
            Let's turn your idea into something meaningful.
          </p>

        </div>


        <div className="row g-4 g-lg-5 align-items-stretch">

          {/* =================================
              LEFT SIDE
          ================================= */}
          <div className="col-lg-5">

            <div className="contact-info-card">

              <div className="contact-card-heading">

                <span className="contact-icon-box">
                  <i className="bi bi-send-fill"></i>
                </span>

                <div>
                  <span>START A CONVERSATION</span>
                  <h3>Let's Build Something</h3>
                </div>

              </div>


              <p className="contact-intro projects-heading-new scroll-reveal reveal-bottom">
                Whether you're looking for a developer, have a website
                idea, or want to collaborate on a project, feel free to
                reach out. I'm always open to meaningful conversations
                and new opportunities.
              </p>


              {/* Contact Items */}

              <div className="contact-details projects-heading-new scroll-reveal reveal-bottom">

                {/* Email */}
                <a
                  href="mailto:vamsinaidana@gmail.com"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </span>

                  <div>
                    <small>Email</small>
                    <strong>
                      vamsinaidana@gmail.com
                    </strong>
                  </div>

                  <i className="bi bi-arrow-up-right contact-detail-arrow"></i>
                </a>


                {/* Phone */}
                <a
                  href="tel:+917416409117"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </span>

                  <div>
                    <small>Phone</small>
                    <strong>
                      +91 74164 09117
                    </strong>
                  </div>

                  <i className="bi bi-arrow-up-right contact-detail-arrow"></i>
                </a>


                {/* Location */}
                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>

                  <div>
                    <small>Location</small>
                    <strong>
                      Visakhapatnam, Andhra Pradesh
                    </strong>
                  </div>
                </div>

              </div>


              {/* Social */}
              <div className="contact-social-wrapper projects-heading-new scroll-reveal reveal-bottom">

                <span>Find me on</span>

                <div className="contact-socials">

                  <a
                    href="https://github.com/vamsinaidana"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a
                    href="#"
                    aria-label="YouTube"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>

                  <a
                    href="https://wa.me/917416409117"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>

                  <a
                    href="mailto:vamsinaidana@gmail.com"
                    aria-label="Email"
                  >
                    <i className="bi bi-envelope-fill"></i>
                  </a>

                </div>

              </div>


              {/* Availability */}
              <div className="contact-availability projects-heading-new scroll-reveal reveal-bottom">

                <span className="availability-dot"></span>

                <div>
                  <strong>Available for work</strong>
                  <small>
                    Freelance projects & collaborations
                  </small>
                </div>

              </div>

            </div>


            {/* Map */}
            <div className="contact-map-card projects-heading-new scroll-reveal reveal-bottom">

              <div className="map-heading">

                <div>
                  <small>MY LOCATION</small>
                  <h4>Visakhapatnam, India</h4>
                </div>

                <i className="bi bi-map-fill"></i>

              </div>

              <div className="contact-map">

                <iframe
                  title="Vamsi Naidana Location"
                  src="https://www.google.com/maps?q=Visakhapatnam,Andhra Pradesh,India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>

            </div>

          </div>


          {/* =================================
              RIGHT SIDE FORM
          ================================= */}
          <div className="col-lg-7">

            <div className="contact-form-card">

              <div className="form-heading">

                <span className="form-number">
                  01
                </span>

                <div>
                  <span>SEND A MESSAGE</span>

                  <h3>
                    Tell me about your <span>idea.</span>
                  </h3>
                </div>

              </div>


              <form onSubmit={handleSubmit}>

                {/* Name + Email */}

                <div className="row g-3">

                  <div className="col-md-6">

                    <div className="contact-input-group">

                      <label htmlFor="contact-name">
                        Your Name
                      </label>

                      <div className="contact-input-wrapper">

                        <i className="bi bi-person"></i>

                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />

                      </div>

                    </div>

                  </div>


                  <div className="col-md-6">

                    <div className="contact-input-group projects-heading-new scroll-reveal reveal-bottom">

                      <label htmlFor="contact-email">
                        Email Address
                      </label>

                      <div className="contact-input-wrapper">

                        <i className="bi bi-envelope"></i>

                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />

                      </div>

                    </div>

                  </div>

                </div>


                {/* Message */}

                <div className="contact-input-group contact-message-group projects-heading-new scroll-reveal reveal-bottom">

                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <div className="contact-input-wrapper contact-textarea-wrapper">

                    <i className="bi bi-chat-left-text"></i>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows="7"
                      placeholder="Tell me about your project, idea or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>

                  </div>

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  <span>
                    Connect With Me
                  </span>

                  <i className="bi bi-arrow-up-right"></i>
                </button>


                <p className="contact-form-note">
                  <i className="bi bi-shield-check"></i>
                  Clicking the button will open your email app with
                  your message ready to send.
                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Contact
