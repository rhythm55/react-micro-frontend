import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="py-4">
        Hi my name is Rhythm. Here header and footer are micro frontends
      </div>
      <Link to="/contact">Contact me</Link>
    </>
  );
};

export default About;
