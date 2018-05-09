import React, { Component } from 'react';
import './ResExperience.css';
class Experience extends Component {
  constructor(props){
    super(props);
    this.state={
      responsibilities: this.props.responsibilities
    };
  }
  render() {
    const responsibilities = this.state.responsibilities.map(responsibility=>{
      return(<li>{responsibility}</li>)
    });

    return (
      <div className="Experience">
            <p><b>{this.props.employer}</b></p>
            <p>{this.props.location}</p>
            <p><i>{this.props.jobTitle}</i></p>
            <p>{this.props.duration}</p>

            <ul>
              {responsibilities}
            </ul>
          </div>
    );
  }
}

export default Experience;
