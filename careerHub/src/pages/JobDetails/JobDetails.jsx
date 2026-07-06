import React from 'react'
import './JobDetails.css'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
 const { id } = useParams();

    const [job, setJob] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:3000/jobs/${id}`)
            .then((response) => response.json())
            .then((data) => setJob(data))
            .catch((error) => console.log(error));

    }, [id]);

    if (!job) {

        return <h2 className="loading">Loading...</h2>;

    }

    return (

        <section className="job-details">

            <div className="job-card">

                <h1>{job.title}</h1>

                <h3>{job.company}</h3>

                <div className="job-info">

                    <p>
                        <strong>Location :</strong> {job.location}
                    </p>

                    <p>
                        <strong>Job Type :</strong> {job.type}
                    </p>

                    <p>
                        <strong>Salary :</strong> {job.salary}
                    </p>

                    <p>
                        <strong>Experience :</strong> {job.experience}
                    </p>

                    <p>
                        <strong>Category :</strong> {job.category}
                    </p>

                </div>

                <div className="description">

                    <h2>Job Description</h2>

                    <p>
                        We are looking for a passionate and dedicated professional
                        to join our team. The candidate should have good technical
                        knowledge, problem-solving skills, and the ability to work
                        effectively in a collaborative environment.
                    </p>

                </div>

                <div className="skills">

                    <h2>Required Skills</h2>

                    <ul>

                        <li>Good Communication Skills</li>
                        <li>Problem Solving</li>
                        <li>Team Collaboration</li>
                        <li>Technical Knowledge</li>

                    </ul>

                </div>

                <Link
                    to={`/apply/${job.id}`}
                    className="apply-btn"
                >
                    Apply Now
                </Link>

            </div>

        </section>
    );
}

export default JobDetails
