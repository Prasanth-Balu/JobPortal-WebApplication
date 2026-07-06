import React from 'react'
import './JobCategories.css'

const JobCategories = () => {
  return (
    <section className="job-categories">

      <div className="container">

        <div className="section-title">

          <h2>Browse Jobs by Category</h2>

          <p>
            Explore opportunities across different industries and
            find the role that matches your skills.
          </p>

        </div>

        <div className="categories-grid">

          <div className="category-card">
            <h3>Frontend Development</h3>
            <p>12 Open Positions</p>
          </div>

          <div className="category-card">
            <h3>Backend Development</h3>
            <p>8 Open Positions</p>
          </div>

          <div className="category-card">
            <h3>Full Stack Development</h3>
            <p>10 Open Positions</p>
          </div>

          <div className="category-card">
            <h3>UI / UX Design</h3>
            <p>6 Open Positions</p>
          </div>

          <div className="category-card">
            <h3>Data Science</h3>
            <p>5 Open Positions</p>
          </div>

          <div className="category-card">
            <h3>Digital Marketing</h3>
            <p>7 Open Positions</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default JobCategories
