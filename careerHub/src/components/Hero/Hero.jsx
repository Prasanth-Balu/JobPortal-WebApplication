import React from 'react'
import './Hero.css'

const Hero = ({ search, setSearch, handleSearch }) => {
    const handleSearchClick = () => {

    handleSearch();

    document
        .getElementById("featured-jobs")
        ?.scrollIntoView({
            behavior: "smooth"
        });

};
    return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            #1 Job Portal for Freshers & Experienced Professionals
          </span>

          <h1 className="hero-title">
            Find Your Dream Job With CareerHub
          </h1>

          <p className="hero-description">
            Explore thousands of verified job opportunities from top companies.
            Search jobs based on your skills, experience, and location.
            Apply easily and build your career with confidence.
          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search by title, company or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="search-btn"
              onClick={handleSearchClick}
            >
              Search
            </button>

          </div>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => {
                document.getElementById("featured-jobs")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Browse Jobs
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <h2>CareerHub</h2>

            <p>Your Career Starts Here</p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
