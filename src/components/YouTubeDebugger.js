// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
        errors: [],
    	user: null,
    	settings: {
    		bitrate: 8,
    		video: {
    			resolution: '1080p'
    		}
    	}
    }
  }

  changeBitrate = () => {
  	this.setState({...this.state, settings: {...this.state.settings, bitrate: 12}})
  }

  changeRes = () => {
  	this.setState({...this.state, settings: {...this.state.settings, video: {resolution: "720p"}}})
  }

  render() {
  	console.log(this.state)
    return (
      <div>
      	<button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
      	<button className="resolution" onClick={this.changeRes} >Resolution</button>
      </div>
    );
  }
}
