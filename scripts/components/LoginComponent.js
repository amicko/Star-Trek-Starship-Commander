var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		var that = this;
		if(this.state.error) {
			errorElement = (
				<p>{this.state.error}</p>
			);
		}
		return (
			<div className="dropDownBox">
				<div>
					<form onSubmit={this.onLogin}>
						<h1>Login</h1>
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
							<button>Login</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onLogin: function(e) {
		e.preventDefault();
		console.log('User Logged In')
		var user = new Parse.User();
		Parse.User.logIn(
			this.refs.email.value,
			this.refs.password.value,
			{
				success: (u) => {
					// console.log(this);
					this.props.router.navigate('dashboard', {trigger: true});
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