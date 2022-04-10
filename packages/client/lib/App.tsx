import React from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import { Builder } from "./Builder"
import { Config } from "./Config"

export const App = () => (
  <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Graviton
      </h2>
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </Router>
  </div>
)
