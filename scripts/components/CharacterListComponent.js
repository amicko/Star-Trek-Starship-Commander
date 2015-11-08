var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="charStatsBox">
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
		this.props.router.navigate('sector-map/' + this.props.characterId, {trigger: true});
	}
})