import React, { Component } from 'react';
import './Resume.css';
import Experience from './ResExperience';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
      	<div className = "flex">
	      <div>
	      	<h3>Education</h3>
	      	<div className ="education">
	      	<p><b>New York University, Shanghai</b> May 2018</p>
	      	<p><i>B.S. Interactive Media Arts</i></p>
	      	<p>Minors: Chinese, Creative Writing</p>
	      	</div>
	      </div>
	      <div>
	      	<h3>Contact Information</h3>
	        <div className ="contact">
	        	<p><b>Mari Allison</b></p>
	        	<p>Email: maritaylor.allison@gmail.com </p>
	        	<p>Phone: (562)243-5626 </p>
	        </div>
	       </div>
	    </div>

	    <h3>Skills</h3>
	    	<div className ="skills">
	    		<p><b>Programming Languages:</b> Python, C# Javascript, React.js</p>
	    		<p><b>Game Development:</b> Unity, Arduino/Processing, Board Games</p>
	    		<p><b>Design Software:</b> Adobe Photoshop, Adobe Illustrator, Adobe Premiere, Adobe Audition</p>
	    		<p><b>Project Management:</b> Git, JIRA, Slack, Trello</p>
	    	</div>
	      <div>
	        <h3> Experience</h3>
	        <Experience employer = "Wonder Workshop" location="San Mateo, CA" duration="July 2018 - Present" jobTitle="Content Designer"  responsibilities={["Developed mission content for Wonder League, supporting growth of the world’s largest early childhood robotics competition to 7,000 teams from over 70 countries","Designed core product experiences for an early learning robot, including games, challenges, and dialogue","Supported new product development through prototyping including laser cutting, programming, and audio recording and editing","Performed and documented weekly user testing in classrooms and after school programs, then rapidly iterated content based on learnings","Implemented on robot experiences by creating state machines in Unity with internal dev tools","Developed AIML chatbot and in-app games for the Cue robot, shipped in two major app releases"]}/>

	        <Experience employer = "NYU Shanghai" location="Shanghai, China" duration="August 2017 - May 2018" jobTitle="Learning Assistant, Communications Lab"  responsibilities={["Provide in class and tutoring support for students enrolled in Communications Lab, a course exploring digital communications and internet art","Coach students on programming best practices and debugging in both individual and group tutoring sessions","Provide consultations with students on the design and technical implementation of their course projects"]}/>

	        <Experience employer = "Guidance Solutions" location="Marina Del Rey, CA" duration="July 2016 - August 2016" jobTitle="QA Intern"  responsibilities={["Assigned tickets to developers using Jira issue tracking software and performed follow up to verify resolution of the issues","Consulted with clients to understand their expectations and website design specifications","Participated in daily scrum meetings to gain familiarity with agile development process","Wrote detailed test cases for offshore team members to execute independently"]}/>

	        <Experience employer = "NYU Shanghai" location="Shanghai, China" duration="February 2016 - May 2016" jobTitle="Student Writer"  responsibilities={["Attended weekly lectures by visiting professors and wrote articles documenting the event content","Collaborated with editing department to achieve writing standards for articles to be published on the university website"]}/>
	      </div>
      </div>
    );
  }
}

export default Resume;
