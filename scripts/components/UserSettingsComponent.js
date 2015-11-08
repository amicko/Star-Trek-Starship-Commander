//dependencies
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			user: []
		}
	},
	componentWillMount: function() {
		var UserModel = Parse.Object.extend('_User');
		var UserQuery = new Parse.Query(UserModel);
		var User = Parse.User.current();

		console.log(User)

		UserQuery.equalTo('objectId', User.id).find().then((user) => {
			this.setState({
				user: user
			})
		})
	},
	render: function() {
		var userblock = this.state.user.map((user) => {
			return (
				<form className="newCharacterForm">
					<label>User Email</label>
					<input ref="UserEmail" type="text" placeholder={user.get('username')}/>
					<button onClick={this.onSaveEmail}>Change Email</button>
					<label>User Password</label>
					<input ref="UserPassword" type="password" placeholder="Password"/>
					<button onClick={this.onSavePassword}>Change Password</button>
				</form>
			)
		})
		return (
			<div className="userSettingsContainer" onClick={this.onBackground}>
				<a href="#dashboard" className="dashboardIcon" onClick={this.onDashboard}></a>
				<a href="#" className="userSettingsIcon"></a>
				<div className="statsContainer"><span className="title">USER SETTINGS</span>
					{userblock}
				</div>
			</div>
		)
	},
	onSaveEmail: function(e) {
		e.preventDefault();
		console.log('Email Changed Button Clicked');
		this.state.user[0].set('email', this.refs.UserEmail.value)
		this.state.user[0].set('username', this.refs.UserEmail.value)
		this.state.user[0].save(null, {
			success: function(CharacterModel) {
				console.log('Email Changed On Server')
			}
		});
	},
	onSavePassword: function(e) {
		e.preventDefault();
		console.log('Password Changed');
		this.state.user[0].set('password', this.refs.UserPassword.value)
		this.state.user[0].save(null, {
			success: function(CharacterModel) {
				console.log('Password Changed On Server')
			}
		});
	}
})