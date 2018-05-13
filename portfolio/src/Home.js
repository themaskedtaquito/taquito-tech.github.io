import React, { Component } from 'react';
import OverviewPage from './OverviewPage';
import FrontView from './FrontView';
import P5Wrapper from './P5Wrapper.js';

import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.onReady = this.onReady.bind(this);
    const psystem = [];
    this.state = {
      p5Props: {
        status: "",
        psystem,
      },
    };
  }

  onReady(){
    this.setState({
      status: "ready"
    });
  }

  render() {
  	const projects = this.props.data
  	const view = projects.map(project=>{
  		return( <FrontView {...project} /> )
  	});
    return (
      <div className="Home">
      <P5Wrapper
            {...this.state.p5Props}
            onReady={this.onReady}
          />
        <div className="profile">
        	<figure><img width = "150px" src = "me.jpg"/></figure>
        	<p className="About">I’m a programmer, game designer, and writer who likes to find creative ways to combine these three disciplines. Many of my projects explore themes of origin and movement, while others are simply experimental exercises in game design. I am also passionate about education and spent my entire senior year working as a peer tutor for underclassmen in my major.</p>
        </div>
        
        <div className="allProjects">
          <h2>Projects</h2>        
        	{view}
        </div>
      </div>
    );
  }

}

export default Home;
