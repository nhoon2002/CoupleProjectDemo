import React, { Component } from 'react';
import {Link} from 'react-router';

import Bubbles from '../components/Bubbles.jsx';
import Sidenav from '../components/Sidenav.jsx';
import fire from '../fire.js';


class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {};

	}

	componentDidMount() {
		document.body.classList.add('Home');





	}


	render() {
		const notLoggedIn = (
			 <div className = "container maindiv Home">

			  <Bubbles />


			  <span className="glyphicon glyphicon-align-justify" onClick={() => this.props.signOut()}></span>




				<div id="main">
				  <div className="row">


					 <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12" id="centerDiv">

						<h1 className="centerFont fade-In">
						  <span className="h1Heart">&hearts;</span>
						  우행시
						  <span className="h1Heart">&hearts;</span>
						</h1>
						<div className='subheadingHolder'>
						<h3 className="subheading">우리들의 행복한 시간</h3>
						</div>
						<button className="btn btn-primary fade-In" id="loginBtn" name="button" onClick={()=>this.props.SigninFacebook()}>로그인 하기</button>
					 </div>

				  </div>
				</div>
			</div>


		)


		const loggedIn = (
			 <div className = "container maindiv Home">

			  <Bubbles />

			  <span className="glyphicon glyphicon-align-justify" onClick={() => this.props.signOut()}></span>






			   <div id="main">
				  <div className="row">

					 {/* <div className="col-md-2 col-lg-2 col-xs-2 col-sm-2"></div> */}
					 <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12" id="centerDiv">

					   <h1 className="centerFont">
						  <span className="h1Heart">&hearts;</span>
						  우행시
						  <span className="h1Heart">&hearts;</span>
					   </h1>
					   <h3 className="subheading">우리들의 행복한 시간</h3>
					   <button className="btn btn-primary" name="button" onClick={() => this.props.router.push('/index')}>완료!</button>
					 </div>
					 {/* <div className="col-md-2 col-lg-2 col-xs-2 col-sm-2"></div> */}
				  </div>
			   </div>
			</div>
		)

		let selection = this.props.loginStatus ? loggedIn : notLoggedIn;


		return (
			selection
		)
  }

};


export default Home;
