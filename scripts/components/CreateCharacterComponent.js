//dependencies
var React = require('react');

//components


var PersonnelModel = Parse.Object.extend('PersonnelModel');
var CharacterModel = Parse.Object.extend('CharacterModel');
var CharacterQuery = new Parse.Query(CharacterModel);
var Query = new Parse.Query(PersonnelModel);

module.exports = React.createClass({
	getInitialState: function() {
		return {
			personnel: [],
			character: []
		};
	},
	componentWillMount: function() {
		var User = Parse.User.current();
		var UserId = User.id

		console.log(UserId)
	},
	render: function() {
		return (
			<div className="createCharacterContainer" onClick={this.onBackground}>
				<a href="#dashboard" className="dashboardIcon" onClick={this.onDashboard}>GO BACK</a>
				<a href="#" className="userSettingsIcon">USER SETTINGS</a>
				<div className="statsContainer">
					<form className="newCharacterForm">
						<label>Choose Character Name</label>
						<input ref="CharacterName" type="text" placeholder="ex: Edward Jellico"/>
						<label>Choose Starship Name</label>
						<input ref="StarshipName" type="text" placeholder="ex: Enterprise"/>
						<label>Choose Starship Registry</label>
						<input ref="Registry" type="text" placeholder="ex: 1701"/>
						<button onClick={this.onSaveCharacter}>Save New Character</button>
					</form>
				</div>
			</div>
		)
	},
	onDashboard: function() {
		this.props.router.navigate('dashboard', {trigger: true});
	},
	onSaveCharacter: function(e) {
		e.preventDefault();
		console.log('Character Saved');
		// var CharacterName = document.getElementById('characterName');
		// var Name = CharacterName.value();
		var User = Parse.User.current();
		var UserId = User.id
		var UserModel = Parse.Object.extend('_User');
		var NewUser = new UserModel({
			objectId: UserId
		});
		var CharacterModel = Parse.Object.extend('CharacterModel');
		var NewCharacter = new CharacterModel({
			objectId: ''
		});
		var PersonnelModel = Parse.Object.extend('PersonnelModel');
		var Captain = new PersonnelModel({
			objectId: 'eFoAyWTKgQ'
		});
		var FirstOff = new PersonnelModel({
			objectId: 'IrXtv7N8WB'
		});
		var Helmsman = new PersonnelModel({
			objectId: 'AuEEh5eiEi'
		});
		var TacOff = new PersonnelModel({
			objectId: '2uFZnyRzqc'
		});
		var MedOff = new PersonnelModel({
			objectId: 'edEJ9hT81z'
		});
		var SciOff = new PersonnelModel({
			objectId: 'k1cvFNwKiB'
		});
		var EngOff = new PersonnelModel({
			objectId: 'N5aOeS9r6t'
		});
		var StarshipClassModel = Parse.Object.extend('StarshipClassModel');
		var NewStarshipClass = new StarshipClassModel({
			objectId: 'p13jnSro9r'
		})
		var StarshipModel = Parse.Object.extend('StarshipModel');
		var NewStarship = new StarshipModel({
			Name: this.refs.StarshipName.value,
			Registry: this.refs.Registry.value,
			Class: NewStarshipClass,
			Captain: Captain,
			FirstOfficer: FirstOff,
			Helmsman: Helmsman,
			TacOfficer: TacOff,
			MedOfficer: MedOff,
			SciOfficer: SciOff,
			EngOfficer: EngOff,
			// characterId: 
			// Character:
		});

		

		NewCharacter.save({
			Name: this.refs.CharacterName.value,
			XP: 100,
			Starship: NewStarship,
			Dilithium: 1000,
			GoldPressedLatinum: 1000,
			UserId: UserId,
			User: NewUser
		})
	}
})