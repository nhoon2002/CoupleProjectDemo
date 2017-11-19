

import React, { Component } from 'react';



class Sidenav extends Component {
	constructor(props) {
		super(props)

		this.state = {sidenavStyle: {width: '250px'}, mainStyle: {}};
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.openNav.bind(this);
	}
   openNav() {

      this.setState({sidenavStyle: {sideNav}, mainStyle: {main}});
      let sideNav = {
        width: '250px',
      };
      let main = {

        marginLeft: '250px',

      };
   }
   closeNav() {

      this.setState({sidenavStyle: {sideNav}, mainStyle: {main}});
      let sideNav = {
        width: '0',
      };
      let main = {

        marginLeft: '0',

      };
   }

	componentDidMount() {

	}

	render() {



        return (

           <div id="mySidenav" className="sidenav" style={this.state.sidenavStyle}>

             <ul className="sideNav_ul">
               <li><a href="javascript:void(0)" className="closebtn">&times;</a></li>
               <li><a href="#">Album</a></li>
               <li><a href="#">Date</a></li>
               <li><a href="#">Todo</a></li>
               <li><a href="#">Notes</a></li>
             </ul>

           </div>

         );
   }

};


export default Sidenav;
