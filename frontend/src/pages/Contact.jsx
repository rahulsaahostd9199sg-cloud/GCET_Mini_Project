// ========================================
// SportsSync - Contact Page
// Sports Department Contact & Support
// ========================================

function Contact() {
  return (
    <main className="contact-page">

      {/* ========================================
          Contact Header
      ======================================== */}
      <section className="contact-hero">

        <span className="section-tag">
          GET IN TOUCH
        </span>

        <h1>
          Contact SportsSync
        </h1>

        <p>
          Have a question about sports activities, players,
          tournaments or the SportsSync system? Send us a
          message and the sports department can assist you.
        </p>

      </section>


      {/* ========================================
          Contact Content
      ======================================== */}
      <section className="contact-layout">

        {/* ========================================
            Contact Information
            ======================================== */}
        <div className="contact-info-panel">

          <h2>
            Sports Department
          </h2>

          <p>
            Connect with the college sports department
            for sports-related queries and support.
          </p>


          {/* Email */}
          <div className="contact-info-item">

            <div className="contact-info-icon">
              ✉️
            </div>

            <div>
              <span>Email</span>
              <strong>
                sports@college.edu
              </strong>
            </div>

          </div>


          {/* Phone */}
          <div className="contact-info-item">

            <div className="contact-info-icon">
              📞
            </div>

            <div>
              <span>Phone</span>
              <strong>
                +91 98765 43210
              </strong>
            </div>

          </div>


          {/* Location */}
          <div className="contact-info-item">

            <div className="contact-info-icon">
              📍
            </div>

            <div>
              <span>Location</span>
              <strong>
                College Sports Department
              </strong>
            </div>

          </div>


          {/* Working Hours */}
          <div className="contact-info-item">

            <div className="contact-info-icon">
              🕐
            </div>

            <div>
              <span>Working Hours</span>
              <strong>
                Monday - Friday, 9:00 AM - 5:00 PM
              </strong>
            </div>

          </div>

        </div>


        {/* ========================================
            Contact Form
            ======================================== */}
        <div className="contact-form-card">

          <div className="contact-form-header">

            <span className="section-tag">
              SEND MESSAGE
            </span>

            <h2>
              How can we help?
            </h2>

            <p>
              Fill in the form below and submit your query
              to the sports department.
            </p>

          </div>


          <form className="contact-form">

            {/* Name */}
            <div className="contact-form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
              />

            </div>


            {/* Email */}
            <div className="contact-form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>


            {/* Subject */}
            <div className="contact-form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter message subject"
              />

            </div>


            {/* Message */}
            <div className="contact-form-group">

              <label>
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message here..."
              ></textarea>

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>


      {/* ========================================
          Quick Support Cards
          ======================================== */}
      <section className="contact-support">

        <div className="support-card">

          <span>🏆</span>

          <h3>
            Sports Activities
          </h3>

          <p>
            Get information about college sports,
            teams and player participation.
          </p>

        </div>


        <div className="support-card">

          <span>📅</span>

          <h3>
            Tournament Queries
          </h3>

          <p>
            Ask about tournaments, fixtures,
            matches and schedules.
          </p>

        </div>


        <div className="support-card">

          <span>📊</span>

          <h3>
            Performance Analytics
          </h3>

          <p>
            Get help understanding player
            performance and analytics.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Contact;