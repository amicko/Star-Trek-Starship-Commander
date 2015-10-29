//dependencies
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			starships: []
		};
	},
	componentWillMount: function() {
		var StarshipClassModel = Parse.Object.extend('StarshipClassModel');
		var Query = new Parse.Query(StarshipClassModel);

		Query.find().then((starships) => {
			this.setState({
				starships: starships
			})
		})
	},
	render: function() {
		var personnel = this.state.starships.map((starship) => {
			return(
				<div className="starshipDetailBox">
					<div>Class Name: {starship.get('Name')}</div>
					<div>Range: {starship.get('Range')}</div>
					<div>Weapons: {starship.get('Weapons')}</div>
					<div>Shields: {starship.get('Shields')}</div>
					<div>Cost: {starship.get('Cost')}</div>
					<div>Level Req: {starship.get('lvlReq')}</div>
					<button onClick={this.onChoose}>Select</button>
				</div>
			)
		})
		return (
			<div className="starshipBox">{personnel}</div>
		)
	},
	onChoose: function() {
		console.log('Starship Class Chosen')
	}
})