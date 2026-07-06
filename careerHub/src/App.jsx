import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import JobDetails from './pages/JobDetails/JobDetails'
import ApplyJob from './pages/ApplyJob/ApplyJob'
import Success from './pages/Success/Success'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path="/job/:id"
          element={<JobDetails />}
        />

        <Route
          path="/apply/:id"
          element={<ApplyJob />}
        />

        <Route
          path="/success"
          element={<Success />}
        />
      </Routes>

    </>
  )
}

export default App

