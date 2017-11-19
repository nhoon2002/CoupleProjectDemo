import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';
import store, { history } from './store.js';
import Home from './containers/Home.jsx';
import Index from './containers/Index.jsx';
import fire from './fire.js';
import { checkSession } from './actions/userActions';

// import Signup from './containers/Signup.jsx';
// import Library from './containers/Library.jsx';
// import Search from './containers/Search.jsx';

fire.auth().onAuthStateChanged(firebaseUser => {

	store.dispatch(checkSession());
	if(firebaseUser) console.log('User: %s', firebaseUser.uid);
	else console.log('User: %s', null);


})
// const checkReroute = () => {
// 	console.log('Checking for existing session before reroute...');
// 	store.dispatch(checkSession(firebase.auth().currentUser));
// }
/* <Route path='/signin' onEnter={checkReroute} component={Signin} /> */

const theRoutes = (
	<Provider store={store}>
	  	<Router history={history}>
		    <Route path="/" component={App} >

		      <IndexRoute component={Home}/>
				<Route path="/index" component={Index} />

				{/* <Route path='/signin' component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/library" component={Library} />
				<Route path="/search" component={Search} /> */}


		    </Route>
		</Router>
	</Provider>

  );

export default theRoutes;
