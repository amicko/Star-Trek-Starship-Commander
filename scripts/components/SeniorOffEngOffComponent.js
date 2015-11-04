//dependencies
var React = require('react');

var PersonnelModel = Parse.Object.extend('PersonnelModel');
var CharacterModel = Parse.Object.extend('CharacterModel');
var CharacterQuery = new Parse.Query(CharacterModel);
var Query = new Parse.Query(PersonnelModel);

module.exports = React.createClass({
	getInitialState: function() {
		return {
			personnel: [],
			character: []
		};
	},
	componentWillMount: function() {
		CharacterQuery.equalTo('objectId', this.props.characterId)
		.find().then((character) => {
		console.log(Math.round(character[0].get('XP')/100)+1)
			Query.lessThan('lvlReq', (Math.round(character[0].get('XP')/100)+1))
			.find().then((personnel) => {
				this.setState({
					personnel: personnel
				})
			})
		})
	},
	render: function() {
		var personnel = this.state.personnel.map((person) => {
			return(
				<div className="personBox">
					<div>Name: {person.get('Name')}</div>
					<div>Officer: {person.get('officer')}</div>
					<div>Security: {person.get('security')}</div>
					<div>Medical: {person.get('medical')}</div>
					<div>Science: {person.get('science')}</div>
					<div>Engineer: {person.get('engineer')}</div>
					<div>Cost: {person.get('cost')}</div>
					<div>Level Req: {person.get('lvlReq')}</div>
					<button onClick={this.onChoose.bind(this, person)}>Select</button>
				</div>
			)
		})
		return (
			<div className="personnelBox">{personnel}</div>
		)
	},
	onChoose: function(person) {
		var PersonCost = person.get('cost');
		var CharDil = this.props.character.get('Dilithium');
		var officer = new PersonnelModel({
			objectId: person.id
		})
		
		if(PersonCost > CharDil) {
			throw 'Not enough Dilithium'
		}
		else {
			this.props.character.set('Dilithium', (CharDil - PersonCost))
			this.props.character.save(null, {
				success: function(CharacterModel) {
					// console.log('Cost subtracted from Dilithium')
				}
			});
			this.props.starship.set('EngOfficer', officer)
			this.props.starship.save(null, {
				success: function(StarshipModel) {
					// console.log('Successfully saved to server')
				}
			});
		}
	}
})