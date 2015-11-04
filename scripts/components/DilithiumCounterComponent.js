//dependencies
var React = require('react');

var CharacterModel = Parse.Object.extend('CharacterModel');
var CharacterQuery = new Parse.Query(CharacterModel);

module.exports = React.createClass({
	getInitialState: function() {
		return {
			character: [],
			charDilithium: []
		}
	},
	componentWillMount: function() {

		CharacterQuery.equalTo('objectId', this.props.characterId)
		.find().then((character) => {
			this.setState({
				character: character
			})
		})
	},
	render: function() {
		var charDil = this.state.character.map((character) => {
			return character.get('Dilithium')
		})
		console.log(charDil[0])
		var that = this;
		// setInterval(function() {
		// 	that.state.character[0].set('Dilithium', (parseFloat(charDil[0]) + 1))
		// 	that.state.character[0].save()
		// }, 3000)

		return (
			<div>Dilithium: {charDil}</div>
		)
	}
})