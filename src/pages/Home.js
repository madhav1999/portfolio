import React from 'react'
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
import IconButton from '@material-ui/core/IconButton';
import ScrollDownIndicator from '../components/ScrollDownIndicator';


function Home() {
  const SocialLinks = {
    linkedin: 'https://www.linkedin.com/in/madhav-kotha/',
    github: 'https://github.com/madhav1999',
    mail: 'mailto:madhavkotha1998@gmail.com'};

    const handleClick = (network) => {
      window.open(SocialLinks[network], '_blank');
    };
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My name is Madhav Kotha</h2>

        <div className='prompt'>
          <p>
            <br></br>
            <br></br>
            {/* <br></br> */}
            Experienced Python developer with 2+ years of expertise in software development and CI/CD processes. Committed to delivering high-quality software products through continuous learning and improvement.
          </p>
          
          <IconButton style={{ color: 'black' }}>
            <LinkedInIcon onClick={() => handleClick('linkedin')}/>
          </IconButton>
          <IconButton>
            <GithubIcon onClick={() => handleClick('github')}/>
          </IconButton>
          <IconButton>
            <EmailIcon onClick={() => handleClick('mail')}/>
          </IconButton>

          <ScrollDownIndicator />
          

        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Technical Skills</h2>
            <span>Python, DataStructures, Django, HTML, CSS, Javascript, Jquery, MySQL, RHEL, Bash, Linux, C++, Problem Solving skills, Microservices, Networking, CI/CD, ReactJS, Java </span>
          </li>
          <li className='item'>
            <h2> Tools </h2>
            <span>Docker, BitBucket, Jira, Jenkins, AWS, WinSCP, Putty, VisualStudio, TOSCA</span>
          </li>
          <li className='item'>
            <h2> Interpersonal Skills </h2>
            <span>Team Player, Prioritizing, Quick learner, Decision Making, Integrity</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home