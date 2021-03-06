'use strict';
//dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
// Parse.initialize('Snilj4eJd19FAHaUolOCxWfJTPMzBazhkRlVyWkV', 'BtifBAoTsDgeuDpIl6pyabRCInHRsqk5Qic6P64U');
Parse.initialize('Snilj4eJd19FAHaUolOCxWfJTPMzBazhkRlVyWkV','unused');
Parse.serverURL = 'https://st-starship-commander.herokuapp.com/';


//page elements
var main = document.getElementById('main');

//components
var HomeComponent = require('./components/HomeComponent.js');
var DashboardComponent = require('./components/DashboardComponent.js');
var SectorMapComponent = require('./components/SectorMapComponent.js');
var MissionComponent = require('./components/MissionComponent.js');
var CreateCharacterComponent = require('./components/CreateCharacterComponent.js');
var CharacterStatsComponent = require('./components/CharacterStatsComponent.js');
var UserSettingsComponent = require('./components/UserSettingsComponent.js');
var BridgeComponent = require('./components/BridgeComponent.js');

//router
var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'create-character': 'createCharacter',
		'sector-map/:characterId': 'sectorMap',
		'sector/:characterId/:sectorId': 'sectorMissions',
		'character-stats/:characterId/:sectorId': 'characterStats',
		'settings': 'settings',
		'bridge/:characterId' : 'bridge'
	},
	home: function() {
		onLogout();
		ReactDOM.render(<HomeComponent router={this}/>, main)
	},
	dashboard: function() {
		if(!Parse.User.current()) {
			this.navigate('', {trigger: true});
		}
		else {
			ReactDOM.render(<DashboardComponent router={this}/>, main)
		}
	},
	createCharacter: function() {
		ReactDOM.render(<CreateCharacterComponent router={this}/>, main)
	},
	sectorMap: function(characterId) {
		ReactDOM.render(<SectorMapComponent characterId={characterId} router={this}/>, main)
	},
	sectorMissions: function(characterId, sectorId) {
		ReactDOM.render(<MissionComponent characterId={characterId} sectorId={sectorId} router={this}/>, main)
	},
	characterStats: function(characterId, sectorId) {
		ReactDOM.render(<CharacterStatsComponent characterId={characterId} sectorId={sectorId} router={this}/>, main)
	},
	settings: function() {
		ReactDOM.render(<UserSettingsComponent router={this}/>, main)
	},
	bridge: function(characterId) {
		ReactDOM.render(<BridgeComponent characterId={characterId} router={this}/>, main)
	}
});

var r = new Router();
Backbone.history.start();

//New Parse to Heroku Example:
// var obj = new Parse.Object('GameScore');
// obj.set('score',1337);
// obj.save().then(function(obj) {
//   console.log(obj.toJSON());
//   var query = new Parse.Query('GameScore');
//   query.get(obj.id).then(function(objAgain) {
//     console.log(objAgain.toJSON());
//   }, function(err) {console.log(err); });
// }, function(err) { console.log(err); });

function onLogout() {
		Parse.User.logOut();
		// this.props.router.navigate('', {trigger: true});
	}