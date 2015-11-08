//dependencies
var React = require('react');

//components
var StarshipListComponent = require('./StarshipListComponent.js');
var SeniorOffCaptainComponent = require('./SeniorOffCaptainComponent.js');
var SeniorOffFirstOffComponent = require('./SeniorOffFirstOffComponent.js');
var SeniorOffHelmsmanComponent = require('./SeniorOffHelmsmanComponent.js');
var SeniorOffTacOffComponent = require('./SeniorOffTacOffComponent.js');
var SeniorOffMedOffComponent = require('./SeniorOffMedOffComponent.js');
var SeniorOffSciOffComponent = require('./SeniorOffSciOffComponent.js');
var SeniorOffEngOffComponent = require('./SeniorOffEngOffComponent.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentCharacter: [],
			currentStarship: [],
			currentStarshipClass: [],
			currentStarshipCaptain: [],
			currentStarshipFirstOfficer: [],
			currentStarshipHelmsman: [],
			currentStarshipTacticalOfficer: [],
			currentStarshipMedicalOfficer: [],
			currentStarshipScienceOfficer: [],
			currentStarshipEngineerOfficer: [],
			starship: 'starship',
			captain: 'captain',
			firstOff: 'firstOff',
			helmsman: 'helmsman',
			tacOff: 'tacOff',
			medOff: 'medOff',
			sciOff: 'sciOff',
			engOff: 'engOff'
		};
	},
	componentWillMount: function() {
		var CharacterModel = Parse.Object.extend('CharacterModel');
		var CharacterQuery = new Parse.Query(CharacterModel);
		var currentCharacter = this.props.characterId

		CharacterQuery.equalTo('objectId', currentCharacter)
		.find().then((character) => {
			this.setState({
				currentCharacter: character
			})
		})

		var StarshipModel = Parse.Object.extend('StarshipModel');
		var StarshipQuery = new Parse.Query(StarshipModel);

		StarshipQuery.equalTo('characterId', currentCharacter)
		.find().then((starship) => {
			this.setState({
				currentStarship: starship
			})
		})

		StarshipQuery.equalTo('characterId', currentCharacter);
		StarshipQuery.include('Class')
		.find().then((starship) => {
			this.setState({
				currentStarshipClass: starship
			})
		})
		StarshipQuery.include('Captain')
		.find().then((captain) => {
			this.setState({
				currentStarshipCaptain: captain
			})
		})
		StarshipQuery.include('FirstOfficer')
		.find().then((firstOfficer) => {
			this.setState({
				currentStarshipFirstOfficer: firstOfficer
			})
		})
		StarshipQuery.include('Helmsman')
		.find().then((helmsman) => {
			this.setState({
				currentStarshipHelmsman: helmsman
			})
		})
		StarshipQuery.include('TacOfficer')
		.find().then((tacticalOfficer) => {
			this.setState({
				currentStarshipTacticalOfficer: tacticalOfficer
			})
		})
		StarshipQuery.include('MedOfficer')
		.find().then((medicalOfficer) => {
			this.setState({
				currentStarshipMedicalOfficer: medicalOfficer
			})
		})
		StarshipQuery.include('SciOfficer')
		.find().then((scienceOfficer) => {
			this.setState({
				currentStarshipScienceOfficer: scienceOfficer
			})
		})
		StarshipQuery.include('EngOfficer')
		.find().then((engineerOfficer) => {
			this.setState({
				currentStarshipEngineerOfficer: engineerOfficer
			})
		})
	},
	render: function() {
		var currentCharacter = this.state.currentCharacter.map((character) => {
			return (
				<div className="characterStatsBox">
					<div className="characterName"><span className="category">NAME: </span>{character.get('Name')}</div>
					<div className="characterXp"><span className="category">XP: </span>{character.get('XP')}</div>
					<div className="characterLevel"><span className="category">LEVEL: </span>{Math.round(character.get('XP')/100)}</div>
					<div className="CharacterDilithium"><span className="category">DILITHIUM: </span>{character.get('Dilithium')}</div>
					<div className="goldPressedLatinum"><span className="category">GOLD-PRESSED LATINUM: </span>{character.get('GoldPressedLatinum')}</div>
				</div>
			)
		})

		var currentStarship = this.state.currentStarship.map((starship) => {
			return starship.get('Captain')
		})
		
		var currentStarshipClass = this.state.currentStarshipClass.map((starship) => {
			return(
				<div className="starshipBox">
					<div className="starshipStatsBox">
						<div className="starshipName">{starship.get('Name')}</div>
						<div className="starshipClassBox">Class: {starship.get('Class').get('Name')}</div>
						<div className="starshipImage">Image</div>
						<div className="starshipStatBox">Range: {starship.get('Class').get('Range')}</div>
						<div className="starshipStatBox">Weapons: {starship.get('Class').get('Weapons')}</div>
						<div className="starshipStatBox">Shields: {starship.get('Class').get('Shields')}</div>
					</div>
					<div className="chooseStarshipBox">
						<button className="changeStarship" onClick={this.onChangeStarship}>Change Starship</button>
					</div>
				</div>
			)
		})

		var starshipCaptain = this.state.currentStarshipCaptain.map((person) => {
			return (
				<div className="personnelBox">
					<div className="position">CAPTAIN</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">{person.get('Captain').get('Name')}</div>
					<div className="personnelStatsContainer">
						<div className="personnelStatBox">
							<div className="stat">Officer</div>
							<div className="box">{person.get('Captain').get('officer')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Security</div>
							<div className="box">{person.get('Captain').get('security')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Medical</div>
							<div className="box">{person.get('Captain').get('medical')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Science</div>
							<div className="box">{person.get('Captain').get('science')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Engineer</div>
							<div className="box">{person.get('Captain').get('engineer')}</div>
						</div>
					</div>
					<button className="changePersonnel" onClick={this.onChangeCaptain}>Change</button>
				</div>
			)
		})

		var starshipFirstOfficer = this.state.currentStarshipFirstOfficer.map((person) => {
			return (
				<div className="personnelBox">
					<div className="position">FIRST OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">{person.get('FirstOfficer').get('Name')}</div>
					<div className="personnelStatsContainer">
						<div className="personnelStatBox">
							<div className="stat">Officer</div>
							<div className="box">{person.get('FirstOfficer').get('officer')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Security</div>
							<div className="box">{person.get('FirstOfficer').get('security')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Medical</div>
							<div className="box">{person.get('FirstOfficer').get('medical')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Science</div>
							<div className="box">{person.get('FirstOfficer').get('science')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Engineer</div>
							<div className="box">{person.get('FirstOfficer').get('engineer')}</div>
						</div>
					</div>
					<button className="changePersonnel" onClick={this.onChangeFirstOff}>Change</button>
				</div>
			)
		})

		var starshipHelmsman = this.state.currentStarshipHelmsman.map((person) => {
			return (
				<div className="personnelBox">
					<div className="position">HELMSMAN</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">{person.get('Helmsman').get('Name')}</div>
					<div className="personnelStatsContainer">
						<div className="personnelStatBox">
							<div className="stat">Officer</div>
							<div className="box">{person.get('Helmsman').get('officer')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Security</div>
							<div className="box">{person.get('Helmsman').get('security')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Medical</div>
							<div className="box">{person.get('Helmsman').get('medical')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Science</div>
							<div className="box">{person.get('Helmsman').get('science')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Engineer</div>
							<div className="box">{person.get('Helmsman').get('engineer')}</div>
						</div>
					</div>
					<button className="changePersonnel" onClick={this.onChangeHelmsman}>Change</button>
				</div>
			)
		})

		var starshipTacticalOfficer = this.state.currentStarshipTacticalOfficer.map((person) => {
			return (
				<div className="personnelBox">
					<div className="position">TACTICAL OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">{person.get('TacOfficer').get('Name')}</div>
					<div className="personnelStatsContainer">
						<div className="personnelStatBox">
							<div className="stat">Officer</div>
							<div className="box">{person.get('TacOfficer').get('officer')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Security</div>
							<div className="box">{person.get('TacOfficer').get('security')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Medical</div>
							<div className="box">{person.get('TacOfficer').get('medical')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Science</div>
							<div className="box">{person.get('TacOfficer').get('science')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Engineer</div>
							<div className="box">{person.get('TacOfficer').get('engineer')}</div>
						</div>
					</div>
					<button className="changePersonnel" onClick={this.onChangeTacOff}>Change</button>
				</div>
			)
		})

		var starshipMedicalOfficer = this.state.currentStarshipMedicalOfficer.map((person) => {
			return (
				<div className="personnelBox">
					<div className="position">MEDICAL OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">{person.get('MedOfficer').get('Name')}</div>
					<div className="personnelStatsContainer">
						<div className="personnelStatBox">
							<div className="stat">Officer</div>
							<div className="box">{person.get('MedOfficer').get('officer')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Security</div>
							<div className="box">{person.get('MedOfficer').get('security')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Medical</div>
							<div className="box">{person.get('MedOfficer').get('medical')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Science</div>
							<div className="box">{person.get('MedOfficer').get('science')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Engineer</div>
							<div className="box">{person.get('MedOfficer').get('engineer')}</div>
						</div>
					</div>
					<button className="changePersonnel" onClick={this.onChangeMedOff}>Change</button>
				</div>
			)
		})

		var starshipScienceOfficer = this.state.currentStarshipScienceOfficer.map((person) => {
			return (
				<div className="personnelBox">
					<div className="position">SCIENCE OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">{person.get('SciOfficer').get('Name')}</div>
					<div className="personnelStatsContainer">
						<div className="personnelStatBox">
							<div className="stat">Officer</div>
							<div className="box">{person.get('SciOfficer').get('officer')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Security</div>
							<div className="box">{person.get('SciOfficer').get('security')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Medical</div>
							<div className="box">{person.get('SciOfficer').get('medical')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Science</div>
							<div className="box">{person.get('SciOfficer').get('science')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Engineer</div>
							<div className="box">{person.get('SciOfficer').get('engineer')}</div>
						</div>
					</div>
					<button className="changePersonnel" onClick={this.onChangeSciOff}>Change</button>
				</div>
			)
		})

		var starshipEngineerOfficer = this.state.currentStarshipEngineerOfficer.map((person) => {
			return (
				<div className="personnelBox">
					<div className="position">ENGINEER OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">{person.get('EngOfficer').get('Name')}</div>
					<div className="personnelStatsContainer">
						<div className="personnelStatBox">
							<div className="stat">Officer</div>
							<div className="box">{person.get('EngOfficer').get('officer')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Security</div>
							<div className="box">{person.get('EngOfficer').get('security')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Medical</div>
							<div className="box">{person.get('EngOfficer').get('medical')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Science</div>
							<div className="box">{person.get('EngOfficer').get('science')}</div>
						</div>
						<div className="personnelStatBox">
							<div className="stat">Engineer</div>
							<div className="box">{person.get('EngOfficer').get('engineer')}</div>
						</div>
					</div>
					<button className="changePersonnel" onClick={this.onChangeEngOff}>Change</button>
				</div>
			)
		})

		var starship = null;
		var captain = null;
		var firstOff = null;
		var helmsman = null;
		var tacOff = null;
		var medOff = null;
		var sciOff = null;
		var engOff = null;

		if(this.state.starship === 'starship') {
			starship = (
				<div>{currentStarshipClass}</div>
			);
		}
		else {
			starship = (
				<StarshipListComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}

		if(this.state.captain === 'captain') {
			captain = (
				<div>{starshipCaptain}</div>
			);
		}
		else {
			// console.log(currentStarship[0].id)
			captain = (
				<SeniorOffCaptainComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}
		if(this.state.firstOff === 'firstOff') {
			firstOff = (
				<div>{starshipFirstOfficer}</div>
			);
		}
		else {
			firstOff = (
				<SeniorOffFirstOffComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}
		if(this.state.helmsman === 'helmsman') {
			helmsman = (
				<div>{starshipHelmsman}</div>
			);
		}
		else {
			helmsman = (
				<SeniorOffHelmsmanComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}
		if(this.state.tacOff === 'tacOff') {
			tacOff = (
				<div>{starshipTacticalOfficer}</div>
			);
		}
		else {
			tacOff = (
				<SeniorOffTacOffComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}
		if(this.state.medOff === 'medOff') {
			medOff = (
				<div>{starshipMedicalOfficer}</div>
			);
		}
		else {
			medOff = (
				<SeniorOffMedOffComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}
		if(this.state.sciOff === 'sciOff') {
			sciOff = (
				<div>{starshipScienceOfficer}</div>
			);
		}
		else {
			sciOff = (
				<SeniorOffSciOffComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}
		if(this.state.engOff === 'engOff') {
			engOff = (
				<div>{starshipEngineerOfficer}</div>
			);
		}
		else {
			engOff = (
				<SeniorOffEngOffComponent starship={this.state.currentStarship[0]} characterId={this.props.characterId} character={this.state.currentCharacter[0]}/>
			);
		}
		return (
			<div className="characterStatsContainer" onClick={this.onBackground}>
				<a href={'#sector/' +this.props.characterId+ '/'+ this.props.sectorId} className="dashboardIcon" onClick={this.onReturn}></a>
				<button onClick={this.onSettings} className="settings"></button>
				<div className="statsContainer">
					{currentCharacter}
					{starship}
					<div className="seniorStaffContainer">
						{captain}
						{firstOff}
						{helmsman}
						{tacOff}
						{medOff}
						{sciOff}
						{engOff}
					</div>
				</div>
			</div>
		)
	},
	onSaveCharacter: function(e) {
		e.preventDefault();
		console.log('Character Saved');
	},
	onBackground: function(e) {
		e.preventDefault();
		if(this.state.starship === null) {
			this.setState({
				starship: 'starship'
			});
		}
		if(this.state.captain === null) {
			this.setState({
				captain: 'captain'
			});
		}
		if(this.state.firstOff === null) {
			this.setState({
				firstOff: 'firstOff'
			});
		}
		if(this.state.helmsman === null) {
			this.setState({
				helmsman: 'helmsman'
			});
		}
		if(this.state.tacOff === null) {
			this.setState({
				tacOff: 'tacOff'
			});
		}
		if(this.state.medOff === null) {
			this.setState({
				medOff: 'medOff'
			});
		}
		if(this.state.sciOff === null) {
			this.setState({
				sciOff: 'sciOff'
			});
		}
		if(this.state.engOff === null) {
			this.setState({
				engOff: 'engOff'
			});
		}
	},
	onReturn: function() {
		this.props.router.navigate('sector-map/'+ this.props.characterId, {trigger: true});
	},
	onSettings: function() {
		this.props.router.navigate('settings', {trigger: true});
	},
	onChangeStarship: function(e) {
		e.preventDefault();
		if(!this.state.starship) {
			this.setState({
				starship: 'starship'
			});
		}
		else {
			this.setState({
				starship: null
			});
		}
	},
	onChangeCaptain: function(e) {
		e.preventDefault();
		if(!this.state.captain) {
			this.setState({
				captain: 'captain'
			});
		}
		else {
			this.setState({
				captain: null
			});
		}
	},
	onChangeFirstOff: function(e) {
		e.preventDefault();
		if(!this.state.firstOff) {
			this.setState({
				firstOff: 'firstOff'
			});
		}
		else {
			this.setState({
				firstOff: null
			});
		}
	},
	onChangeHelmsman: function(e) {
		e.preventDefault();
		if(!this.state.helmsman) {
			this.setState({
				helmsman: 'helmsman'
			});
		}
		else {
			this.setState({
				helmsman: null
			});
		}
	},
	onChangeTacOff: function(e) {
		e.preventDefault();
		if(!this.state.tacOff) {
			this.setState({
				tacOff: 'tacOff'
			});
		}
		else {
			this.setState({
				tacOff: null
			});
		}
	},
	onChangeMedOff: function(e) {
		e.preventDefault();
		if(!this.state.medOff) {
			this.setState({
				medOff: 'medOff'
			});
		}
		else {
			this.setState({
				medOff: null
			});
		}
	},
	onChangeSciOff: function(e) {
		e.preventDefault();
		if(!this.state.sciOff) {
			this.setState({
				sciOff: 'sciOff'
			});
		}
		else {
			this.setState({
				sciOff: null
			});
		}
	},
	onChangeEngOff: function(e) {
		e.preventDefault();
		if(!this.state.engOff) {
			this.setState({
				engOff: 'engOff'
			});
		}
		else {
			this.setState({
				engOff: null
			});
		}
	}
})