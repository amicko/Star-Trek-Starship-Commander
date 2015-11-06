//dependencies
var React = require('react');

//components
var MissionStatsComponent = require('./MissionStatsComponent.js');
var DilithiumCounterComponent = require('./DilithiumCounterComponent.js')

module.exports = React.createClass({
	getInitialState: function() {
		return {
			mainBox: 'missions',
			missionDrop: null,
			sectorMissions: [],
			sector: [],
			character: [],
			// charDilithium: []
		};
	},
	componentWillMount: function() {
		var CharacterModel = Parse.Object.extend('CharacterModel');
		var CharacterQuery = new Parse.Query(CharacterModel);
		var sectorId = this.props.sectorId;
		var MissionQuery = new Parse.Query('MissionsModel');
		var SectorQuery = new Parse.Query('SectorModel');

		CharacterQuery.equalTo('objectId', this.props.characterId)
		.find().then((character) => {
			MissionQuery.equalTo('Sector', sectorId)
			.lessThan('lvlReq', (Math.round(character[0].get('XP')/100)+1))
			.find().then((missions) => {
				this.setState({
					sectorMissions: missions,
					character: character
				})
			})
		})

		SectorQuery.equalTo('objectId', sectorId)
		.find().then((sector) => {
			this.setState({
				sector: sector
			})
		})

		// console.log(this.props.sectorId);
	},
	render: function() {
		var charName = this.state.character.map((character) => {
			return character.get('Name')
		})
		var charGPL = this.state.character.map((character) => {
			return character.get('GoldPressedLatinum')
		})

		var sectorMissions = this.state.sectorMissions.map((missions, index) => {
			return (
				<div className={'systemInfo system' + missions.id}>{missions.get('System')}
					<div className="teaserBox">
						<div className="missionName">{missions.get('Name')}</div>
						<div className="missionTeaser">{missions.get('Lore')}</div>
						<br />
						<button className="dropDownIcon" onClick={(e) => {this.onMissionDropDown(e, index)}}>Expand</button>
					</div>
				</div>
			)
		})

		this.sectorMissionStats = this.state.sectorMissions.map((mission, index) => {
			// var style = {display: 'none', 'zIndex': '999', 'marginLeft': '-25em', width: '100%', height: '75.5vh', float: 'right'};
			return (
				<MissionStatsComponent update={this.onUpdate} toggle={this.onBackground}  key={index} missionName={mission.get('Name')} missionLore={mission.get('Lore')} lvlReq={mission.get('lvlReq')} time={mission.get('TimeToCompletion')} offNeeded={mission.get('ShownOffNeeded')} typeReq={mission.get('TypeReq')} statNeeded={mission.get('ShownStatNeeded')} neededStat={mission.get('NeededStat')} rewardXP={mission.get('RewardXP')} rewardGPL={mission.get('RewardGPL')} characterId={this.props.characterId}/>
			)
		})

		var SectorStats = this.state.sector.map((sector) => {
			return (
				<div className="sectorLoreBlock">
					<h3>{sector.get('Name')}</h3>
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
				<a href="#settings" className="userSettingsIcon"></a>
				{SectorStats}
				<div className="userHUD">
					<div className="HUDDil"><DilithiumCounterComponent characterId={this.props.characterId}/></div>
					<button className="HUDFiller HUDButton" onClick={this.onCharStats}>{charName}</button>
					<div className="HUDGPL">GPL: {charGPL}</div>
				</div>
				<div className="sectorBlockContainer">
					{dropDown}
				</div>
			</div>
		)
	},
	onUpdate: function(e) {
		this.forceUpdate();
	},
	onBackground: function(e) {
		this.setState({
			mainBox: 'missions'
		})
	},
	onCharStats: function() {
		// var User = Parse.User.current();
		// console.log(User);
		this.props.router.navigate('character-stats/' + this.props.characterId + '/' + this.props.sectorId, {trigger: true});
	},
	onMissionDropDown: function(e, index) {
		e.preventDefault();
		// this.sectorMissionStats[index].props.style.display = 'block';
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