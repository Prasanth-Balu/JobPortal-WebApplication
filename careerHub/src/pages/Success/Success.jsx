import React from 'react'
import './Success.css'
import { Link } from "react-router-dom";

const Success = () => {
  return (

    <section className="success">

      <div className="success-card">

        <h1> Application Submitted Successfully!</h1>

        <p>
          Thank you for applying. Your application has been received successfully.
        </p>

        <Link to="/" className="home-btn">
          Back To Home
        </Link>

      </div>

    </section>

  );
}

export default Success
