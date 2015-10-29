//dependencies
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			personnel: []
		};
	},
	componentWillMount: function() {
		var PersonnelModel = Parse.Object.extend('PersonnelModel');
		var Query = new Parse.Query(PersonnelModel);

		Query.find().then((personnel) => {
			this.setState({
				personnel: personnel
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
					<button>Select</button>
				</div>
			)
		})
		return (
			<div className="personnelBox">{personnel}</div>
		)
	}
})