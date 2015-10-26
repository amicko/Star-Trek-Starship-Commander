//dependencies
var React = require('react');

//components

module.exports = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		popup: null
	// 	};
	// },
	// componentWillMount: function() {
	// 	this.props.router.on('route', () => {
	// 		this.forceUpdate();
	// 	});
	// },
	render: function() {
		return (
			<div className="sectorMapContainer">
				<div className="userSettingsIcon">Image</div>
				<div className="sectorMap">
					<a href="#sector/number" className="sectorBlock sector1">Sector One</a>
					<a href="#sector/number" className="sectorBlock sector2">Sector Two</a>
					<a href="#sector/number" className="sectorBlock sector3">Sector Three</a>
					<a href="#sector/number" className="sectorBlock sector4">Sector Four</a>
				</div>
				<button className="dashboardButton" onClick={this.onDashboard}>DASHBOARD</button>
			</div>
		)
	},
	onDashboard: function(e) {
		e.preventDefault();
		this.props.router.navigate('dashboard', {trigger: true});
	}
})