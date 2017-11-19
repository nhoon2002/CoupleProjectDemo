import React, { Component } from 'react';



class Bubbles extends Component {
	constructor(props) {
		super(props)

		this.state = {};

	}

	componentDidMount() {

	}

	render() {



        return (

				<div id="bubbles">
		         <div className="bubble x1"></div>
		         <div className="bubble x2"></div>
		         <div className="bubble x3"></div>
		         <div className="bubble x4"></div>
		         <div className="bubble x5"></div>
		      </div>

         );
   }

};


export default Bubbles;
