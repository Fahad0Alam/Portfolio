import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Shrestha</Link>
      </div>
      <div className="navbar-links">

        <Link to="/about">About</Link> {/* This should link to /about */}
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar