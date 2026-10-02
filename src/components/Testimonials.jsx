import React, { useEffect, useRef, useState } from "react";



const testimonials = [
  {
    id: 1,
    name: "Kranthi Kumar",
    role: " Founder",
    company: "Focus40 Academy",
    image: "/kranthi.png",
    rating: "5.0",
    review:
      "Working with Vamsi was a great experience. He understood the requirements quickly and transformed the idea into a clean, modern and responsive website. The attention to detail and communication throughout the project was excellent.",
  },

  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    company: "Digital Business",
    image: "/priya.jpg",
    rating: "5.0",
    review:
      "Vamsi delivered a professional website with a very smooth user experience. The design looked modern across desktop and mobile devices, and every requested feature was implemented carefully.",
  },

  {
    id: 3,
    name: "Arjun Reddy",
    role: "Project Manager",
    company: "Software Company",
    image: "/arjun.jpg",
    rating: "5.0",
    review:
      "The development process was organized and transparent. Vamsi was open to feedback and continuously improved the project. His React and frontend development skills really stood out.",
  },

  {
    id: 4,
    name: "Sneha Varma",
    role: "Entrepreneur",
    company: "Independent Business",
    image: "/sneha.jpg",
    rating: "5.0",
    review:
      "I really liked the final result. The website was visually appealing, responsive and easy to use. Vamsi also suggested useful improvements that made the overall experience better.",
  },
];



const Testimonials = () => {

   const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div>
       <section className="testimonials-section projects-top-line scroll-reveal reveal-top" id="testimonials">

      {/* Background Effects */}
      <div className="testimonial-glow testimonial-glow-one"></div>
      <div className="testimonial-glow testimonial-glow-two"></div>

      <div className="container">

        {/* Heading */}
        <div className="testimonials-heading">

          <span className="testimonials-eyebrow">
            <i className="bi bi-chat-quote-fill"></i>
            CLIENT FEEDBACK
          </span>

          <h2>
            What People <span>Say</span>
          </h2>

          <p>
            Every project is an opportunity to create something meaningful.
            Here's what people say about working with me.
          </p>

        </div>


        {/* Slider */}
        <div className="testimonial-slider-wrapper">

          {/* Previous */}
          <button
            className="testimonial-nav testimonial-prev"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            <i className="bi bi-arrow-left"></i>
          </button>


          <div
            className="testimonial-slider"
            ref={sliderRef}
          >

            {testimonials.map((testimonial) => (

              <div
                className="testimonial-slide"
                key={testimonial.id}
              >

                <div className="testimonial-card">

                  {/* Quote */}
                  <div className="testimonial-quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>


                  {/* Client Image */}
                  <div className="testimonial-image-wrapper">

                    <div className="testimonial-image-ring">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                      />

                    </div>

                    <span className="testimonial-verified">
                      <i className="bi bi-check-lg"></i>
                    </span>

                  </div>


                  {/* Rating */}
                  <div className="testimonial-rating">

                    <div className="stars">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className="bi bi-star-fill"
                        ></i>
                      ))}

                    </div>

                    <span className="rating-number">
                      {testimonial.rating}
                    </span>

                  </div>


                  {/* Review */}
                  <p className="testimonial-review">
                    "{testimonial.review}"
                  </p>


                  {/* Client */}
                  <div className="testimonial-client">

                    <h3>{testimonial.name}</h3>

                    <p>
                      {testimonial.role}
                      <span>•</span>
                      {testimonial.company}
                    </p>

                  </div>


                  {/* Small bottom line */}
                  <div className="testimonial-bottom-line">

                    <span></span>

                    <i className="bi bi-stars"></i>

                    <span></span>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* Next */}
          <button
            className="testimonial-nav testimonial-next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <i className="bi bi-arrow-right"></i>
          </button>

        </div>


        {/* Dots */}
        <div className="testimonial-dots">

          {testimonials.map((testimonial, index) => (

            <button
              key={testimonial.id}
              className={`testimonial-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>

          ))}

        </div>


        {/* Bottom Trust */}
        <div className="testimonial-trust">

          <div className="trust-item">
            <i className="bi bi-patch-check-fill"></i>
            <span>Quality Focused</span>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <i className="bi bi-lightning-charge-fill"></i>
            <span>Fast Delivery</span>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <i className="bi bi-headset"></i>
            <span>Easy Communication</span>
          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Testimonials
