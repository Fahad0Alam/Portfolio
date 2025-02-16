import React from "react";


const Home = () => {
    const handleDownloadCV = () => {
      window.open("/path-to-your-cv.pdf", "_blank");
    };
  
    const handleContact = () => {
      window.location.href = "mailto:ghoshshrestha32@gmail.com";
    };

    return(
        <div className="container">
        {/* Profile Section */}
        <img
          src="/shresthamimi1111-20250214-0001.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div className="text-container">
          <h5 className="profile-greet">Hello I'm</h5>
          <h1 className="profile-name">Shrestha Ghosh</h1>
          <h2 className="profile-tagline">Civil Engineer</h2>

          {/* Button Container */}
          <div className="button-container">
            <button className="button" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="button" onClick={handleContact}>
              Contact Me
            </button>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Home