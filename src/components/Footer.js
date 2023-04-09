import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  const SocialLinks = {
    linkedin: 'https://www.linkedin.com/in/madhav-kotha/',
  github: 'https://github.com/madhav1999'};
  
  const handleClick = (network) => {
    window.open(SocialLinks[network], '_blank');
  };

  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon onClick={() => handleClick('github')}/>
        <LinkedInIcon onClick={() => handleClick('linkedin')}/>
      </div>
      <p> &copy; Madhav Kotha</p>
    </div>
  );
}

export default Footer;