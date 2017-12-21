import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Link} from 'react-router';
import ProfilePicHolder from '../components/ProfilePicHolder.jsx'




class Index extends Component {
   constructor(props) {
		super(props)

		this.state = {};

	}

  componentDidMount() {
    document.body.classList.add('Index')

    // This code adds class to the body for handling of background image shift


  }
  componentWillUnmount() {
    document.body.classList.remove('Index')

  }
   render() {


      return (
         <div className ="container contIndex">
            <ProfilePicHolder firebaseDB = {this.props.firebaseDB}/>


            <button type="button" className="btn btn-warning" onClick={() => this.props.signOut()}>Log Out</button>
         </div>
      )


   }



}

export default Index;
