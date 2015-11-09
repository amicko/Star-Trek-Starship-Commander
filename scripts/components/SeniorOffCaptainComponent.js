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
			// console.log(Math.round(character[0].get('XP')/100)+1)
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
					<div className="personName">Name: {person.get('Name')}</div>
					<div className="personOff">Officer: {person.get('officer')}</div>
					<div className="personTac">Security: {person.get('security')}</div>
					<div className="personMed">Medical: {person.get('medical')}</div>
					<div className="personSci">Science: {person.get('science')}</div>
					<div className="personEng">Engineer: {person.get('engineer')}</div>
					<div className="personCost">Cost: {person.get('cost')}</div>
					<div className="personLvlReq">Level Req: {person.get('lvlReq')}</div>
					<button className="personSelect" onClick={this.onChoose.bind(this, person)}>Select</button>
				</div>
			)
		})
		return (
			<div className="personnelBox">{personnel}</div>
		)
	},
	onChoose: function(person) {
		var PersonCost = person.get('cost');
		var CharGPL = this.props.character.get('GoldPressedLatinum');
		var officer = new PersonnelModel({
			objectId: person.id
		})
		
		if(PersonCost > CharGPL) {
			this.props.onDebt();
		}
		else {
			this.props.character.set('GoldPressedLatinum', (CharGPL - PersonCost))
			this.props.character.save(null, {
				success: function(CharacterModel) {
					// console.log('Cost subtracted from Dilithium')
				}
			});
			this.props.starship.set('Captain', officer)
			this.props.starship.save(null, {
				success: function(StarshipModel) {
					// console.log('Successfully saved to server')
				}
			});
			this.props.noDebt();
		}
	}
})