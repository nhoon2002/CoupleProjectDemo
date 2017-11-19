import React, { Component } from 'react';
import * as firebase from 'firebase';
import * as actions from '../actions/userActions.js';






// function getNiceName(routes) {
// 	let path = (routes[routes.length - 1] || {}).path || 'Home';
// 	return path.replace('/', '')
// 			.toUpperCase() || 'Unknown Page';
// }

class Main extends Component {

  render() {
    return (

      <div className="maindiv Main">
         {/* Show header, but only if logged in. */}

          {React.cloneElement(this.props.children, this.props)}

      </div>

    );

  }
}


export default Main;
