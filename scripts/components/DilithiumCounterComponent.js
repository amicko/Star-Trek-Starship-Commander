//dependencies
var React = require('react');

var CharacterModel = Parse.Object.extend('CharacterModel');
var CharacterQuery = new Parse.Query(CharacterModel);

module.exports = React.createClass({
	getInitialState: function() {
		return {
			character: null,
			charDilithium: []
		}
	},
	componentWillMount: function() {

		CharacterQuery.get(this.props.characterId).then((character) => {
			this.setState({
				character: character
			})
			console.log(typeof Math.round(character.get('XP')/100))
			console.log(typeof character.get('Dilithium'))
			if(character.get('Dilithium') < Math.round(character.get('XP')/100)) {
				var that = this;
				setInterval(function() {
					character.set('Dilithium', character.get('Dilithium') + 1)
					character.save()
					that.forceUpdate()
				}, 30000)
			}
		})
	},
	render: function() {
		// var charDil = this.state.character.map((character) => {
		// 	return character.get('Dilithium')
		// })
		// console.log(this.state.character)
		var DilCount = ''

		if(this.state.character) { 
			DilCount = this.state.character.get('Dilithium')
		}
		return (
			<div>Dilithium: {DilCount} / {Math.round(this.props.charXP/100)}</div>
		)

	}
})