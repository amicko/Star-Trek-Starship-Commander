//dependencies
var React = require('react');

var StarshipClassModel = Parse.Object.extend('StarshipClassModel');
var CharacterModel = Parse.Object.extend('CharacterModel');
var CharacterQuery = new Parse.Query(CharacterModel);
var Query = new Parse.Query(StarshipClassModel);

module.exports = React.createClass({
	getInitialState: function() {
		return {
			starships: [],
			character: []
		};
	},
	componentWillMount: function() {
		CharacterQuery.equalTo('objectId', this.props.characterId)
		.find().then((character) => {
			// console.log(Math.round(character[0].get('XP')/100)+1)
			Query.lessThan('LvlReq', (Math.round(character[0].get('XP')/100)+1))
			.find().then((starships) => {
				this.setState({
					starships: starships
				})
			})
		})
	},
	render: function() {
		var starshipDetails = this.state.starships.map((starship) => {
			// console.log(starship.get('Cost'))
			return(
				<div className="starshipDetailBox">
					<div>Class Name: {starship.get('Name')}</div>
					<div>Range: {starship.get('Range')}</div>
					<div>Weapons: {starship.get('Weapons')}</div>
					<div>Shields: {starship.get('Shields')}</div>
					<div>Cost: {starship.get('Cost')}</div>
					<div>Level Req: {starship.get('LvlReq')}</div>
					<button onClick={this.onChoose.bind(this, starship)}>Select</button>
				</div>
			)
		})
		return (
			<div className="starshipBox">{starshipDetails}</div>
		)
	},
	onChoose: function(starship) {
		// console.log(starship);
		var StarshipCost = starship.get('Cost');
		var CharDil = this.props.character.get('Dilithium');
		var newStarship = new StarshipClassModel({
			objectId: starship.id
		})
		
		if(StarshipCost > CharDil) {
			throw 'Not enough Dilithium'
		}
		else {
			this.props.character.set('Dilithium', (CharDil - StarshipCost))
			this.props.character.save(null, {
				success: function(CharacterModel) {
					// console.log('Cost subtracted from Dilithium')
				}
			});
			this.props.starship.set('Class', newStarship)
			this.props.starship.save(null, {
				success: function(StarshipModel) {
					// console.log('Successfully saved to server')
				}
			});
		}
	}
})