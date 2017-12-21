import React, { Component } from 'react';



class TriangleMenu extends Component {
	constructor(props) {
		super(props)

		this.state = {sidenavStyle: {width: '0%'}};

      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
	}
   openNav() {
      console.log('Clicked!!');
      this.setState({sidenavStyle: {width: '35%'}});
   }
   closeNav() {


      this.setState({sidenavStyle: {width: '0px'}});
   }

	componentDidMount() {

	}

	render() {



        return (
           <div>
             <div id='triangleMenu' onClick={this.openNav}></div>
              <div className="sidenav" style={this.state.sidenavStyle}>
                <ul className="sideNav_ul">
                  <li><a className="closebtn" onClick={this.closeNav}>&times;</a></li>
                  <li><a href="#">Album</a></li>
                  <li><a href="#">Date</a></li>
                  <li><a href="#">Todo</a></li>
                  <li><a href="#">Notes</a></li>
                </ul>

              </div>
           </div>

         );
   }

};


export default TriangleMenu;
