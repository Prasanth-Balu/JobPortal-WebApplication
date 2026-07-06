import React from 'react'
import './ApplyJob.css'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ApplyJob = () => {
  const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        coverLetter: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    function handleSubmit(event) {

        event.preventDefault();

        const application = {
            jobId: Number(id),
            ...formData
        };

        fetch("http://localhost:3000/applications", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(application)

        })
            .then(() => {

                navigate("/success");

            })
            .catch((error) => console.log(error));

    }

    return (

        <section className="apply-job">

            <div className="apply-card">

                <h1>Apply Job</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />


                    <textarea
                        name="coverLetter"
                        placeholder="Cover Letter"
                        rows="6"
                        value={formData.coverLetter}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Submit Application
                    </button>

                </form>

            </div>

        </section>

    );
}

export default ApplyJob
