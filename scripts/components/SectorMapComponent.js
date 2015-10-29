//dependencies
var React = require('react');

//components

module.exports = React.createClass({
	getInitialState: function() {
		return {
			sector1: [],
			sector2: [],
			sector3: [],
			sector4: []
		};
	},
	componentWillMount: function() {
		var SectorModel = Parse.Object.extend('SectorModel');
		var Query = new Parse.Query(SectorModel);

		Query.equalTo('Name', 'Arawath Sector')
		.find().then((result) => {
			this.setState({
				sector1: result
			})
		})

		Query.equalTo('Name', 'Nelvana Sector')
		.find().then((result) => {
			this.setState({
				sector2: result
			})
		})

		Query.equalTo('Name', 'Bajor Sector')
		.find().then((result) => {
			this.setState({
				sector3: result
			})
		})

		Query.equalTo('Name', 'Archanis Sector')
		.find().then((result) => {
			this.setState({
				sector4: result
			})
		})
	},
	render: function() {
		var sector1Name = this.state.sector1.map((name) => {
			return name.get('Name')
		})

		var sector1Id = this.state.sector1.map((name) => {
			return name.id
		})

		var sector2Name = this.state.sector2.map((name) => {
			return name.get('Name')
		})

		var sector2Id = this.state.sector2.map((name) => {
			return name.id
		})

		var sector3Name = this.state.sector3.map((name) => {
			return name.get('Name')
		})

		var sector3Id = this.state.sector3.map((name) => {
			return name.id
		})

		var sector4Name = this.state.sector4.map((name) => {
			return name.get('Name')
		})

		var sector4Id = this.state.sector4.map((name) => {
			return name.id
		})

		return (
			<div className="sectorMapContainer">
				<div className="userSettingsIcon">Image</div>
				<div className="sectorMap">
					<a href={'#sector/' +this.props.characterId+ '/'+ sector1Id} className="sectorBlock sector1">{sector1Name}</a>
					<a href={'#sector/' +this.props.characterId+ '/'+ sector2Id} className="sectorBlock sector2">{sector2Name}</a>
					<a href={'#sector/' +this.props.characterId+ '/'+ sector3Id} className="sectorBlock sector3">{sector3Name}</a>
					<a href={'#sector/' +this.props.characterId+ '/'+ sector4Id} className="sectorBlock sector4">{sector4Name}</a>
				</div>
				<button className="dashboardButton" onClick={this.onDashboard}>DASHBOARD</button>
			</div>
		)
	},
	onDashboard: function(e) {
		e.preventDefault();
		this.props.router.navigate('dashboard', {trigger: true});
	}
})