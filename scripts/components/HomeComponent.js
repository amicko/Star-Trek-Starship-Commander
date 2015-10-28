//dependencies
var React = require('react');

//components
var RegisterComponent = require('./RegisterComponent.js');
var LoginComponent = require('./LoginComponent.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			popup: null
		};
	},
	componentWillMount: function() {
		// this.props.router.on('route', () => {
		// 	this.forceUpdate();
		// });
	},
	render: function() {
		var r = this.props.router;
		var dropDown = null;
		if(this.state.popup === 'login') {
			dropDown = (
				<LoginComponent router={r}/>
			);
		}
		else if(this.state.popup === 'register') {
			dropDown = (
				<RegisterComponent router={r}/>
			);
		}
		return (
			<div className="titleContainer">
				<div className="titlePicBox">
					<div className="titlePic"></div>
				</div>
				<nav>
					<button className="loginBtn" onClick={this.onLogin}>Login</button>
					<button className="registerBtn" onClick={this.onRegister}>Register</button>
				</nav>
				{dropDown}
			</div>
		)
	},
	onLogin: function(e) {
		e.preventDefault();
		if(this.state.popup === 'login') {
			this.setState({
				popup: null
			});
		}
		else {
			this.setState({
				popup: 'login'
			});
		}
	},
	onRegister: function(e) {
		e.preventDefault();
		if(this.state.popup === 'register') {
			this.setState({
				popup: null
			});
		}
		else {
			this.setState({
				popup: 'register'
			});
		}
	}
})