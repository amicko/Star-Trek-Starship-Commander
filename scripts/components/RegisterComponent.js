var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p>{this.state.error}</p>
			);
		}
		return (
			<div className="dropDownBox">
				<div>
					<form onSubmit={this.onRegister}>
						<h1></h1>
						{errorElement}
						<div>
							<div>
								<label htmlFor="first_name">Email Address</label>
								<input type="text" ref="email" id="email_address" />
							</div>
						</div>
						<div>
							<div>
								<label htmlFor="password">Password</label>
								<input type="password" ref="password" id="password" />
							</div>
						</div>
						<div>
							<button>Register</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onRegister: function(e) {
		e.preventDefault();
		console.log('User Registered');
		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.email.value,
				password: this.refs.password.value,
				email: this.refs.email.value
			},
			{
				success: (u) => {
					// this.props.router.navigate('dashboard', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
		this.refs.email.value = null;
		this.refs.password.value = null;
	}
});