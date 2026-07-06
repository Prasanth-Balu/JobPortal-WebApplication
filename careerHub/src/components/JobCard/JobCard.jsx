import React from 'react'
import { Link } from "react-router-dom";
import './JobCard.css'
const JobCard = ({ job }) => {

    return (
        <div className="job-card">

            <div className="job-card-header">

                <h3 className="job-title">
                    {job.title}
                </h3>

                <span className="job-type">
                    {job.type}
                </span>

            </div>

            <div className="job-card-body">

                <p className="company-name">
                    {job.company}
                </p>

                <p className="job-location">
                    {job.location}
                </p>

                <p className="job-salary">
                    {job.salary}
                </p>

                <p className="job-experience">
                    Experience : {job.experience}
                </p>

            </div>

            <div className="job-card-footer">

                <Link
                    to={`/job/${job.id}`}
                    className="details-btn"
                >
                    View Details
                </Link>

            </div>

        </div>

    );
}

export default JobCard
