import React from "react";
import "../components/About-styles.css";
import aboutImage from "../Assets/about-img.png";

function About() {
  return (
    <div className="About">
      <div className="About-text">
        <h2>About Us</h2>
        <p>
          Signify is an innovative platform designed to simplify the process of
          learning sign language. With a focus on making communication through
          signs accessible and engaging, Signify offers intuitive lessons,
          interactive tools, and real-time interpretation features. Whether
          you're a beginner or looking to enhance your skills, Signify provides
          a seamless experience to help you become fluent in sign language and
          connect with the Deaf community.
        </p>
      </div>

      <div className="About-img">
        <img src={aboutImage} alt="About Us" className="About-img" />
      </div>
    </div>
  );
}

export default About;
