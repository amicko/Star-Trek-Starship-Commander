//dependencies
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div style={this.props.style} className=" missionStatBlock">
				<h3>{this.props.missionName}</h3>
				<div><strong>Lore:</strong><br/>{this.props.missionLore}</div>
				<div><strong>Level Required:</strong> {this.props.lvlReq}</div>
				<div><strong>Time to Complete:</strong> {this.props.time} Minute</div>
				<div><strong>Senior Officer Needed:</strong> {this.props.typeReq}</div>
				<div><strong>Stat Used:</strong> {this.props.neededStat}</div>
				<div><strong>XP Value:</strong> {this.props.rewardXP}</div>
				<div><strong>Gold-Pressed Latinum Value:</strong> {this.props.rewardGPL}</div>
				<button onClick={this.onToggle}>Minimize</button>
				<button onClick={this.doMission}>Attempt Mission</button>
			</div>
		)
	},
	onToggle: function() {
		this.props.toggle();
	},
	doMission: function() {
		console.log('Mission Attempted');
	}
})