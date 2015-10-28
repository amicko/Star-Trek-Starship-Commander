//dependencies
var React = require('react');

//components

module.exports = React.createClass({
	getInitialState: function() {
		return {
			missionDrop: 'missions',
			sectorMissions: [],
			sector: []
		};
	},
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		})

		var sectorId = this.props.sectorId;
		var Query = new Parse.Query('MissionsModel');
		var SectorQuery = new Parse.Query('SectorModel');

		Query.equalTo('Sector', sectorId)
		.find().then((missions) => {
			this.setState({
				sectorMissions: missions
			})
		})

		SectorQuery.equalTo('objectId', sectorId)
		.find().then((sector) => {
			this.setState({
				sector: sector
			})
		})
	},
	render: function() {

		var sectorMissions = this.state.sectorMissions.map((missions) => {
			return (
				<div className="sectorMission">
					<div className="missionName">{missions.get('Name')}</div>
					<div className="missionTeaser">{missions.get('Lore')}</div>
					<button className="dropDownIcon" onClick={this.onMissionDropDown}>Arrow</button>
				</div>
			)
		})

		var SectorStats = this.state.sector.map((sector) => {
			return (
				<div className="sectorLoreBlock">
					<h3>{sector.get('Name')}</h3>
					<div className="sectorImage">SectorImage</div>
					<div className="sectorLoreTitle">Sector Lore</div>
					<div className="sectorLore">{sector.get('Lore')}
					</div>
				</div>
			)
		})

		var dropDown = null;

		if(this.state.missionDrop === 'missions') {
			dropDown = (
				<div className="sectorMissionBlock">
						{sectorMissions}
				</div>
			)
		}
		else {
			dropDown = (
				<div className="sectorMissionBlock">
						Stuff
				</div>
			)
		}

		return (
			<div className="missionScreenContainer">
				<a href="#sector-map"className="sectorMapIcon">Sector Map</a>
				<a href="#" className="userSettingsIcon">User Settings</a>
				<div className="userHUD">
					<button className="HUDFiller HUDButton" onClick={this.onCharStats}>Character Name</button>
					<div className="HUDFiller">Dilithium Amount</div>
					<div className="HUDFiller">Gold-Pressed Latinum Amount</div>
					<button className="HUDFiller HUDButton" onClick={this.onCharStats}>Starship Name</button>
				</div>
				<div className="sectorBlockContainer">
					{SectorStats}
					{dropDown}
				</div>
			</div>
		)
	},
	onCharStats: function() {
		this.props.router.navigate('character-stats/number', {trigger: true});
	},
	onMissionDropDown: function(e) {
		e.preventDefault();
		if(this.state.missionDrop === 'missions') {
			this.setState({
				missionDrop: null
			});
		}
		else {
			this.setState({
				missionDrop: 'missions'
			})
		}
	}
})