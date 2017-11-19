import React, { Component } from 'react';

import {Link} from 'react-router';



class Index extends Component {
   constructor(props) {
		super(props)

		this.state = {};

	}

   render() {

      return (
         <div>
            <h1>This is the index</h1>
            <button type="button" className="btn btn-warning" onClick={() => this.props.signOut()}>Log Out</button>
         </div>
      )


   }



}

export default Index;
