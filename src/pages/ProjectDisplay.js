import React from 'react'
import {useParams} from "react-router-dom"; //hook to access id from App.js
import {ProjectList} from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";
import GithubIcon from "@material-ui/icons/GitHub";
import IconButton from '@material-ui/core/IconButton';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const SocialLinks = {
      github: project.link,};
  
      const handleClick = (network) => {
        window.open(SocialLinks[network], '_blank');
      };
  return (
    <div className="project">
        <h1 style={{ fontSize: '4vw' }}> {project.name} </h1>
        <img style={{ maxWidth: '50%', maxHeight: '50%', height: 'auto' }} src={project.image} />
        <p style={{ fontSize: '2.5vw' }}>
            <b>Skills</b>: {project.skills}
        </p>
        <IconButton>
            <GithubIcon onClick={() => handleClick('github')}/>
        </IconButton>
    </div>
  )
}

export default ProjectDisplay;