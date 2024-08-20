import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// App Components
import Home from "./components/Home"
import About from './components/About'
import Courses from "./components/Courses";
import Featured from "./components/Featured";
import Teachers from "./components/Teachers";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CSS from "./components/courses/CSS";
import HTML from "./components/courses/HTML";
import JavaScript from './components/courses/JavaScript';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="courses" element={<Courses />}>
          <Route index element={<Navigate replace={true} to="html"/>}/>
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="javascript" element={<JavaScript />} />
        </Route>
        <Route path="featured" element={<Featured />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
