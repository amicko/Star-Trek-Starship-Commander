//dependencies
var React = require('react');

//components
var MissionStatsComponent = require('./MissionStatsComponent.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			mainBox: 'missions',
			missionDrop: null,
			sectorMissions: [],
			sector: []
		};
	},
	componentWillMount: function() {
		

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
		var sectorMissions = this.state.sectorMissions.map((missions, index) => {
			return (
					<div key={'mission'+index} className="sectorMission">
						<div className="missionName">{missions.get('Name')}</div>
						<div className="missionTeaser">{missions.get('Lore')}</div>
						<button className="dropDownIcon" onClick={(e) => {this.onMissionDropDown(e, index)}}>Expand</button>
					</div>
			)
		})

		this.sectorMissionStats = this.state.sectorMissions.map((mission, index) => {
			var style = {display: 'none', 'zIndex': '999', 'marginLeft': '-25em', width: '50%', height: '75.5vh', float: 'right'};
			return (
				<MissionStatsComponent toggle={this.onBackground} style={style} key={index} missionName={mission.get('Name')} missionLore={mission.get('Lore')} lvlReq={mission.get('lvlReq')} time={mission.get('TimeToCompletion')} typeReq={mission.get('TypeReq')} neededStat={mission.get('NeededStat')} rewardXP={mission.get('RewardXP')} rewardGPL={mission.get('RewardGPL')} />
			)
		})

		var SectorStats = this.state.sector.map((sector) => {
			return (
				<div className="sectorLoreBlock">
					<h3>{sector.get('Name')}</h3>
					<div className="sectorImage"></div>
					<div className="sectorLoreTitle">Sector Lore</div>
					<div className="sectorLore">{sector.get('Lore')}
					</div>
				</div>
			)
		})

		var dropDown = null;
		if(this.state.mainBox === 'missions') {
			dropDown = (
				<div className="sectorMissionBlock">
						{sectorMissions}
				</div>
			)
		}
		else {
			dropDown = (
				<div>{this.state.missionDrop}</div>
			)
		}

		return (
			<div className="missionScreenContainer">
				<a href={'#sector-map/' + this.props.characterId}className="sectorMapIcon"></a>
				<a href="#" className="userSettingsIcon"></a>
				<div className="userHUD">
					<button className="HUDFiller HUDButton" onClick={this.onCharStats}>Character Name</button>
					<div className="HUDFiller">Dilithium Amount</div>
					<div className="HUDFiller">Gold-Pressed Latinum Amount</div>
					<button className="HUDFiller HUDButton" onClick={this.onCharStats}>Starship Name</button>
				</div>
				<div className="sectorBlockContainer">
					{dropDown}
					{SectorStats}
				</div>
			</div>
		)
	},
	onBackground: function(e) {
		this.setState({
			mainBox: 'missions'
		})
	},
	onCharStats: function() {
		var User = Parse.User.current();
		// console.log(User);
		this.props.router.navigate('character-stats/' + this.props.characterId, {trigger: true});
	},
	onMissionDropDown: function(e, index) {
		e.preventDefault();
		this.sectorMissionStats[index].props.style.display = 'block';
		var shownComponent = this.sectorMissionStats[index]
		this.setState({
			missionDrop: shownComponent
		});
		if(this.state.mainBox === 'missions') {
			this.setState({
				mainBox: 'null'
			});
		}
		else {
			this.setState({
				mainBox: 'missions'
			})
		}
	}
})