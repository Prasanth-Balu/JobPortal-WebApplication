import React from 'react'
import { useState,useEffect } from "react";
import './FeaturedJobs.css'
import JobCard from '../JobCard/JobCard'
const FeaturedJobs = ({ searchText }) => {
     const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch("http://localhost:3000/jobs")
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }

                return response.json();

            })
            .then((data) => {

                setJobs(data);
                setLoading(false);

            })
            .catch(() => {

                setError("Unable to load jobs.");
                setLoading(false);

            });

    }, []);

    const filteredJobs = jobs.filter((job) => {

        const search = searchText.toLowerCase();

        return (
            job.title.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search) ||
            job.location.toLowerCase().includes(search)
        );

    });

    return (

        <section className="featured-jobs">

            <div className="container">

                <div className="section-title">

                    <h2>Featured Jobs</h2>

                    <p>
                        Explore the latest job opportunities from
                        trusted companies.
                    </p>

                </div>

                {loading && <h3>Loading jobs...</h3>}

                {error && <h3>{error}</h3>}

                {!loading && !error && filteredJobs.length === 0 && (
                    <h3>No jobs found.</h3>
                )}

                <div className="jobs-grid">

                    {filteredJobs.map((job) => (

                        <JobCard
                            key={job.id}
                            job={job}
                        />

                    ))}

                </div>

            </div>

        </section>
    );


}

export default FeaturedJobs
