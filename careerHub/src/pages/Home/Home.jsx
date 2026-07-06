import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import JobCategories from '../../components/JobCategories/JobCategories'
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs'
import Footer from '../../components/Footer/Footer'
import { useState} from "react";
const Home = () => {
   const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    setSearchText(search);
  };

  return (
    <>
      <Header />

      <Hero
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <JobCategories />

      <section id="featured-jobs">
        <FeaturedJobs searchText={searchText} />
      </section>

      <section id="contact">
        <Footer />
      </section>

    </>
  );
}

export default Home
