import React from 'react'
import { useNavigate } from 'react-router-dom' //it is used to navigate that is when a project is clicked respective id is to be passed and its corresponding view is to displayed

function ProjectItem({image, name, id, link}) {
  const navigate = useNavigate();
  return (
    <div className='projectItem' onClick={()=> {
      navigate("/project/"+id);
    }}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>

        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem