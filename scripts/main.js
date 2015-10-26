'use strict';
//dependencies
var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');
var jQuery = $;
Parse.initialize('Snilj4eJd19FAHaUolOCxWfJTPMzBazhkRlVyWkV', 'BtifBAoTsDgeuDpIl6pyabRCInHRsqk5Qic6P64U');

//page elements
var main = document.getElementById('main');

//components
var HomeComponent = require('./components/HomeComponent.js');
var DashboardComponent = require('./components/DashboardComponent.js');
var SectorMapComponent = require('./components/SectorMapComponent.js');
var MissionComponent = require('./components/MissionComponent.js');

//router
var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'create-character': 'createCharacter',
		'sector-map': 'sectorMap',
		'sector/number': 'sectorMissions',
		'character-stats/:id': 'characterStats',
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

	},
	sectorMap: function() {
		ReactDom.render(<SectorMapComponent router={r}/>, main)
	},
	sectorMissions: function() {
		ReactDom.render(<MissionComponent router={r}/>, main)
	},
	characterStats: function(id) {

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