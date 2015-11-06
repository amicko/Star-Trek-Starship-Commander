//dependencies
var React = require('react');

var StarshipModel = Parse.Object.extend('StarshipModel');
var StarshipQuery = new Parse.Query(StarshipModel);
var PersonnelModel = Parse.Object.extend('PersonnelModel');
var CharacterModel = Parse.Object.extend('CharacterModel');
var CharacterQuery = new Parse.Query(CharacterModel);

module.exports = React.createClass({
	getInitialState: function() {
		return {
			statNum: [],
			character: []
		}
	},
	componentWillMount: function() {
		StarshipQuery.equalTo('characterId', this.props.characterId)
		StarshipQuery.include(this.props.typeReq);
		StarshipQuery.find().then((result) => {
			// console.log(result[0].get(this.props.typeReq).get(this.props.neededStat))
			this.setState({
				statNum: result[0].get(this.props.typeReq).get(this.props.neededStat)
			})
		})

		CharacterQuery.equalTo('objectId', this.props.characterId)
		.find().then((character) => {
			this.setState({
				character: character
			})
		})
	},
	render: function() {
		// var that = this
		return (
			<div  className="missionStatBlock">
				<h3>{this.props.missionName}</h3>
				<div className="lore"><span className="category">Lore:</span> {this.props.missionLore}</div>
				<div><span className="category">Level Required:</span> {this.props.lvlReq}</div>
				<div><span className="category">Cost to Attempt:</span> {this.props.time*100} Dilithium</div>
				<div><span className="category">Senior Officer Needed:</span> {this.props.offNeeded}</div>
				<div><span className="category">Stat Used:</span> {this.props.statNeeded}</div>
				<div><span className="category">XP Value:</span> {this.props.rewardXP}</div>
				<div><span className="category">Gold-Pressed Latinum Value:</span> {this.props.rewardGPL}</div>
				<button className="minButton" onClick={this.onToggle}>Sector Screen</button>
				<button className="attButton" onClick={this.doMission}>Attempt Mission</button>
			</div>
		)
	},
	onToggle: function() {
		this.props.toggle();
	},
	doMission: function() {
		console.log('Mission Attempted');
		var charDil = this.state.character.map((character) => {
			return character.get('Dilithium')
		})
		var charXP = this.state.character.map((character) => {
			return character.get('XP')
		})
		var charGPL = this.state.character.map((character) => {
			return character.get('GoldPressedLatinum')
		})
		var calc = Math.random();
		if(this.props.time * 100 > charDil) {
			throw ('Not enough Dilithium')
		}
		else {
			this.state.character[0].set('Dilithium', parseFloat(charDil) - (parseFloat(this.props.time) * 100));
			this.state.character[0].save(null, {
				success: function(CharacterModel) {
					console.log('Dilithium Decreased')
				}
			})
			if(calc * 5 <= this.state.statNum) {
				console.log('Success:', this.state.statNum + ' is greater than ' + (calc * 5))
				this.state.character[0].set('XP', parseFloat(charXP) + this.props.rewardXP)
				this.state.character[0].save(null, {
					success: function(CharacterModel) {
						console.log('XP Increased')
					}
				})
				this.state.character[0].set('GoldPressedLatinum', parseFloat(charGPL) + this.props.rewardGPL)
				this.state.character[0].save(null, {
					success: function(CharacterModel) {
						console.log('GPL Increased')
					}
				})
				// console.log('Old XP: ' + charXP + 'New XP: ' + (parseFloat(charXP) + this.props.rewardXP))
			}
			else {
				console.log('Failure:', this.state.statNum + ' is not greater than ' + (calc * 5))
			}
		}
		console.log(charXP);
		this.props.update();
	}
})