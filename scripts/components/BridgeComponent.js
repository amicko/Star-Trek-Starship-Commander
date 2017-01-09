var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			location: null
		}
	},
	render: function() {
		var bridgeDisplay = 
			<div id="bridgeFront">
				<button title="Conn" id="connButton" onClick={this.onToConn}></button>
				<button title="Ops" id="opsButton" onClick={this.onToOps}></button>
				<button title="Left Bridge Ramp" id="leftBridgeButton" onClick={this.onToLeftBridge}></button>
				<button title="Right Bridge Ramp" id="rightBridgeButton" onClick={this.onToRightBridge}></button>
			</div>

		if(this.state.location == 'conn') {
			bridgeDisplay = 
				<div id="bridgeConn">
					<button onClick={this.onToViewscreen}>Back</button>
				</div>
		}
		if(this.state.location == 'ops') {
			bridgeDisplay = 
				<div id="bridgeOps">
					<button onClick={this.onToViewscreen}>Back</button>
				</div>
		}
		if(this.state.location == 'leftBridge') {
			bridgeDisplay =
				<div id="bridgeLeft">
					<button title="Computer Terminal" className="rearBridgeButton" onClick={this.onToRearBridge}></button>
					<button title="Viewscreen" className="viewscreenBridgeButton" onClick={this.onToViewscreen}></button>
				</div>
		}
		if(this.state.location == 'rightBridge') {
			bridgeDisplay =
				<div id="bridgeRight">
					<button title="Computer Terminal" className="rearBridgeButton" onClick={this.onToRearBridge}>Rear</button>
					<button title="Viewscreen" className="viewscreenBridgeButton" onClick={this.onToViewscreen}>Front</button>
				</div>
		}
		if(this.state.location == 'rearBridge') {
			bridgeDisplay =
				<div id="bridgeRear">
					<button title="Left Bridge Ramp" id="leftBridgeButton" onClick={this.onToLeftBridge}></button>
					<button title="Console One" id="console1"></button>
					<button title="Console Two" id="console2"></button>
					<button title="Console Three" id="console3"></button>
					<button title="Right Bridge Ramp" id="rightBridgeButton" onClick={this.onToRightBridge}></button>
				</div>
		}
		return (
			<div className="bridgeBox">
				{bridgeDisplay}
			</div>
		);
	},
	onToConn: function() {
		console.log('Conn Pressed')
		this.setState({
			location: 'conn'
		})
	},
	onToOps: function() {
		console.log('Ops Pressed')
		this.setState({
			location: 'ops'
		})
	},
	onToViewscreen: function() {
		this.setState({
			location: null
		})
	},
	onToLeftBridge: function() {
		this.setState({
			location: 'leftBridge'
		})
	},
	onToRightBridge: function() {
		this.setState({
			location: 'rightBridge'
		})
	},
	onToRearBridge: function() {
		this.setState({
			location: 'rearBridge'
		})
	}
});