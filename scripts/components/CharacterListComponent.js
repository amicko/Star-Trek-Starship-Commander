//dependencies
var React = require('react');

//components

module.exports = React.createClass({
	getInitialState: function() {
		return {
			sector1: null
		};
	},
	componentWillMount: function() {
		
	},
	render: function() {

		return (
			<div className="charStatsContainer">
				<div className="charStats">
					<div>Character: {this.props.name}</div>
					<div>Level: {Math.round(this.props.level/100)}</div>
					<div>Starship: {this.props.starship}</div>
				</div>
				<div className="buttonContainer">
					<button className="charStatsButton" onClick={this.onClickEnter}>ENTER</button>
				</div>
			</div>
		)
	},
	onClickEnter: function(e) {
		e.preventDefault();
		console.log('button clicked')
		this.props.router.navigate('sector-map/' + this.props.characterId, {trigger: true});
	}
})