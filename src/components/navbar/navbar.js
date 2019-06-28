import React from "react"
import SocialLink from "../social-link/social-link";
import monogram from '../../images/monogram-white.svg';
import './navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <img id="nav-logo" src={monogram} alt="monogram"></img>
    <span className="nav-link" id="nav-portfolio"><a href="#portfolio">Portfolio</a></span>
    <span className="nav-link" id="nav-about"><a href="#about">About</a></span>
    <div id="nav-social-menu">
      <SocialLink name="instagram" url="https://www.instagram.com/thesonofthomp/"></SocialLink>
      <SocialLink name="twitter" url="https://www.twitter.com/thesonofthomp/"></SocialLink>
      <SocialLink name="github" url="https://www.github.com/thesonofthomp"></SocialLink>
      <SocialLink name="linkedin" url="https://www.linkedin.com/in/adammthompson/"></SocialLink>
    </div>
  </nav>
)

export default Navbar
