
import React, { Component } from 'react';
class ProfilePicHolder extends Component {
	constructor(props) {
		super(props)

		this.state = {};
	}

	componentDidMount() {

	}

	render() {



        return (



              <div className="row topIndex">
                <div className="col-xs-4 itCol left">

                <img className='img-circle' src={this.props.firebaseDB[0].profilePic} alt='photoURL'/>


                </div>
                <div className="col-xs-4 itCol middle"></div>
                <div className="col-xs-4 itCol right">
                <img className='img-circle' src={this.props.firebaseDB[1].profilePic} alt='photoURL'/>
                </div>
              </div>




         );
   }

};


export default ProfilePicHolder;
