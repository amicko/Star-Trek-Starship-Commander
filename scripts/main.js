'use strict';
//dependencies
var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
Parse.initialize('Snilj4eJd19FAHaUolOCxWfJTPMzBazhkRlVyWkV', 'BtifBAoTsDgeuDpIl6pyabRCInHRsqk5Qic6P64U');

//page elements
var main = document.getElementById('main');

//components
var HomeComponent = require('./components/HomeComponent.js');
var DashboardComponent = require('./components/DashboardComponent.js');
var SectorMapComponent = require('./components/SectorMapComponent.js');
var MissionComponent = require('./components/MissionComponent.js');
var CreateCharacterComponent = require('./components/CreateCharacterComponent.js');
var CharacterStatsComponent = require('./components/CharacterStatsComponent.js');

//router
var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'create-character': 'createCharacter',
		'sector-map/:characterId': 'sectorMap',
		'sector/:characterId/:sectorId': 'sectorMissions',
		'character-stats/:characterId': 'characterStats',
		'settings': 'settings'
	},
	home: function() {
		onLogout();
		ReactDom.render(<HomeComponent router={r}/>, main)
	},
	dashboard: function() {
		if(!Parse.User.current()) {
			this.navigate('', {trigger: true});
		}
		else {
			ReactDom.render(<DashboardComponent router={r}/>, main)
		}
	},
	createCharacter: function() {
		ReactDom.render(<CreateCharacterComponent router={r}/>, main)
	},
	sectorMap: function(characterId) {
		ReactDom.render(<SectorMapComponent characterId={characterId} router={r}/>, main)
	},
	sectorMissions: function(characterId, sectorId) {
		ReactDom.render(<MissionComponent characterId={characterId} sectorId={sectorId} router={r}/>, main)
	},
	characterStats: function(characterId) {
		ReactDom.render(<CharacterStatsComponent characterId={characterId} router={r}/>, main)
	},
	settings: function() {

	}
});

var r = new Router();
Backbone.history.start();

function onLogout() {
		Parse.User.logOut();
		// this.props.router.navigate('', {trigger: true});
	}