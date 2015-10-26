//dependencies
var React = require('react');

//components

module.exports = React.createClass({
	getInitialState: function() {
		return {
			popup: null
		};
	},
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var dropDown = null;
		if(this.state.popup === 'choose') {
			dropDown = (
				<div>
				<div className="charStatsContainer">
					<div className="charStats">
						<div>Character name</div>
						<div>Level</div>
						<div>Starship</div>
					</div>
					<div className="buttonContainer">
						<button className="charStatsButton" onClick={this.onEnter}>ENTER</button>
					</div>
				</div>
				<div className="charStatsContainer">
					<div className="charStats">
						<div>Character name</div>
						<div>Level</div>
						<div>Starship</div>
					</div>
					<div className="buttonContainer">
						<button className="charStatsButton" onClick={this.onEnter}>ENTER</button>
					</div>
				</div>
				<div className="charStatsContainer">
					<div className="charStats">
						<div>Character name</div>
						<div>Level</div>
						<div>Starship</div>
					</div>
					<div className="buttonContainer">
						<button className="charStatsButton" onClick={this.onEnter}>ENTER</button>
					</div>
				</div>
				<div className="charStatsContainer">
					<div className="charStats">
						<div>Character name</div>
						<div>Level</div>
						<div>Starship</div>
					</div>
					<div className="buttonContainer">
						<button className="charStatsButton" onClick={this.onEnter}>ENTER</button>
					</div>
				</div>
				</div>
			);
		}
		else {
			dropDown = (
				<span>CHOOSE EXISTING CHARACTER</span>
			)
		}
		return (
			<div className="dashboardContainer" onClick={this.onBackground}>
				<div className="userSettingsIcon">Image</div>
				<div className="optionBoxContainer">
					<a href="#" className="optionBox"><span>CREATE NEW CHARACTER</span></a>
					<a href="#" className="optionBox" onClick={this.onChoose}>{dropDown}</a>
					<a href="#" className="optionBox"><span>HOW TO PLAY</span></a>
				</div>
				<div className="footerBox">
					<div className="footerImage">Image</div>
					<div className="footerText">Run a manual sweep of anomalous airborne or electromagnetic readings. Radiation levels in our atmosphere have increased by 3,000 percent. Electromagnetic and subspace wave fronts approaching synchronization. What is the strength of the ship's deflector shields at maximum output?
					</div>
				</div>
			</div>
		)
	},
	onChoose: function(e) {
		e.preventDefault();
		// console.log('Existing Characters')
		// if(this.state.popup === 'choose') {
		// 	this.setState({
		// 		popup: null
		// 	});
		// }
		// else {
		// 	this.setState({
		// 		popup: 'choose'
		// 	});
		// }
		if(!this.state.popup) {
			this.setState({
				popup: 'choose'
			});
		}
	},
	onBackground: function(e) {
		// console.log('Background clicked')
		if(this.state.popup === 'choose') {
			this.setState({
				popup: null
			});
		}
	},
	onEnter: function(e) {
		e.preventDefault();
		// console.log('Character Entered');
		this.props.router.navigate('sector-map', {trigger: true});
	}
})