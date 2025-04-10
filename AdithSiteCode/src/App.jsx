import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollButton from './components/scrollButton'
import ProjectCard from './components/ProjectCard'

export default function App() {

  function handleMouseOver(id) {
    const target = document.getElementById(id);
    target.style.textShadow = '5px 5px 20px #6389ae';
  }

  function handleMouseOut(id) {
    const target = document.getElementById(id);
    target.style.textShadow = 'none';
  }
  
  return (
    <>

      
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> 
        
        
        <p id="name"  onMouseOver={() => handleMouseOver('name')} onMouseOut={() => handleMouseOut('name')}>Adith Vasudevan</p>
        <p id="info">Welcome to my site!</p>

        <ScrollButton target="about_me" name="About Me"></ScrollButton>
        <ScrollButton target="projects" name="Projects"></ScrollButton>
        

    
        <div id='about_me'>
          <br/>
          <p id='about_me_name'><ins>About Me</ins></p>
          <p className='about_me_cont'>Hello, my name is Adith. I was born and raised in Petaluma, California (an hour north of San Francisco)</p>
          <p className='about_me_cont'>I am an undergraduate student at Washington University in St. Louis studying Computer Science and Statistics. </p>
          <p className='about_me_cont'>I am proficient in Python, Java, C++, HTML/CSS, Javascript (React/Node), and MongoDB.</p>
          <p className='about_me_cont'>I am always looking to expand my technology experience and knowledge</p>

          <br/>
          <br/>

          <p className='about_me_cont'>In my free time, I enjoy lifting weights, playing poker, and watching sports (Go Warriors, 49ers, and Giants!)</p>

          <br/>
          <br/>
          <br/>
          <br/>

        </div>

        <div id='projects'>
          <br/>
          <br/>
          <br/>
          <p id='about_me_name'><ins>Projects</ins></p>
          <div id='project_container'>
            <ProjectCard title="Chat Server" year={2025} tech="HTML/CSS/JS, Node.js, Socket.io" description="A chat server where users can create/join public or password-protected private servers." gitLink="AdithVasu/ChatServerJS"/>
            <ProjectCard title="Workout Builder" year={2024} tech="HTML/CSS/JS, React.js" description="A workout builder app which allows users to customize a workout based on workout data gathered/stored in JSON files." gitLink="AdithVasu/WorkoutBuilderApp"/>
            <ProjectCard title="Mock Operating System" year={2024} tech="C++" description="A mock operating system with basic os functionality completely constructed in C++" gitLink="AdithVasu/C-Mock-OS"/>
            <ProjectCard title="NFl Sentiment Analysis Report" year={2024} tech="Python" description="A sentiment analysis conducted by finding/scraping Broncos articles and determining their semtiment score over time" gitLink="AdithVasu/Sentiment-Analysis"/>
            <ProjectCard title="Personal Website" year={2024} tech="HTML/CSS/JS, React.js, Netlify" description="Current site (Your's truly lol)" gitLink="AdithVasu/AdithSite"/>
          </div>
        </div>

        <div id='contact'>
          <p id = "contactLabel"><b>Let's Get In Touch</b></p>
          <p id = "contactInfo">a.vasudevan@wustl.edu | +1 707-835-4331</p>
       </div>
       

    </>
  )
}


