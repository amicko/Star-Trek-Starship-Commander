var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			sectors: []
		};
	},
	componentWillMount: function() {
		var SectorModel = Parse.Object.extend('SectorModel');
		var SectorQuery = new Parse.Query(SectorModel);
		var CharacterModel = Parse.Object.extend('CharacterModel');
		var CharacterQuery = new Parse.Query(CharacterModel);

		CharacterQuery.equalTo('objectId', this.props.characterId)
		.find().then((character) => {
			SectorQuery
			.lessThan('LvlReq', (Math.round(character[0].get('XP')/100)+1))
			.find().then((sectors) => {
			this.setState({
				sectors: sectors
			});
		});
		})

		
	},
	render: function() {
		var sectors = this.state.sectors.map((sector) => {
			return <a key={sector.id} href={'#sector/' +this.props.characterId+ '/'+ sector.id} className={'sectorBlock sector-'+sector.id}>{sector.get('Name')}</a>
		});
		
		return (
			<div className="sectorMapContainer">
				<a href="#settings" className="userSettingsIcon"></a>
				<div className="sectorMap">
					{sectors}
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