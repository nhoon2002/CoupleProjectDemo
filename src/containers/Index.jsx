import React, { Component } from 'react';

import {Link} from 'react-router';



class Index extends Component {
   constructor(props) {
		super(props)

		this.state = {};

	}

  componentDidMount() {
    document.body.classList.add('Index')
  }
  componentWillUnmount() {
    document.body.classList.remove('Index')

  }
   render() {

      return (
         <div className ="container contIndex">
            <div className="row topIndex">
              <div className="col-xs-4 itCol left">
                <h3>Left</h3>
              </div>
              <div className="col-xs-4 itCol middle">Middle</div>
              <div className="col-xs-4 itCol right">Right</div>
            </div>
            <button type="button" className="btn btn-warning" onClick={() => this.props.signOut()}>Log Out</button>
         </div>
      )


   }



}

export default Index;
