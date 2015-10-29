//dependencies
var React = require('react');

//components
var CharacterListComponent = require('./CharacterListComponent.js')

module.exports = React.createClass({
	getInitialState: function() {
		return {
			popup: null,
			characters: []
		};
	},
	componentWillMount: function() {
		// var SectorModel = Parse.Object.extend('SectorModel');
		// var Query = new Parse.Query(SectorModel);

		// Query.equalTo('Name', 'Arawath Sector')
		// .find().then((result) => {
		// 	this.setState({
		// 		sector1: result
		// 	})
		// })
		var User = Parse.User.current();
		var UserId = User.id
		// var CharacterModel = Parse.Object.extend('CharacterModel');
		var Query = new Parse.Query('CharacterModel');
		var InnerQuery =  new Parse.Query('StarshipModel');

		Query.equalTo('UserId', UserId);
		// InnerQuery.equalTo('characterId', '9JJXd6NFGB');
		// Query.matchesQuery('Starship', InnerQuery)
		Query.include('Starship');
		Query.find().then((result) => {
			this.setState({
				characters: result
			})
		})

		
	},
	render: function() {
		// console.log(this.state.characters);
		var r = this.props.router;

		var CharacterList = this.state.characters.map((character) => {
			return (
				<CharacterListComponent characterId={character.id} name={character.get('Name')} level={character.get('XP')} starship={character.get('Starship').get('Name')} dilithium={character.get('Dilithium')} gpl={character.get('GoldPressedLatinum')} router={r}/>
			)
		})

		var dropDown = null;
		if(this.state.popup === 'choose') {
			dropDown = (
				<div className="charStatsContainer">{CharacterList}</div>
			)
		}
		else {
			dropDown = (
				<span className="span">CHOOSE EXISTING CHARACTER</span>
			)
		}
		return (
			<div className="dashboardContainer" onClick={this.onBackground}>
				<a href="#"className="dashboardIcon">LOBBY</a>
				<a href="#"className="userSettingsIcon">USER SETTINGS</a>
				<div className="optionBoxContainer">
					<a href="#create-character" className="optionBox"><span className="span">CREATE NEW CHARACTER</span></a>
					<a href="#" className="optionBox" onClick={this.onChoose}>{dropDown}</a>
					<a href="#" className="optionBox"><span className="span">HOW TO PLAY</span></a>
				</div>
				<div className="footerBox">
					<div className="footerImage">Image</div>
					<div className="footerText">Run a manual sweep of anomalous airborne or electromagnetic readings. Radiation levels in our atmosphere have increased by 3,000 percent. Electromagnetic and subspace wave fronts approaching synchronization. What is the strength of the ship's deflector shields at maximum output?
					</div>
				</div>
			</div>
		)
	},
	onChoose: function(e) {
		e.preventDefault();
		if(!this.state.popup) {
			this.setState({
				popup: 'choose'
			});
		}
	},
	onBackground: function(e) {
		if(this.state.popup === 'choose') {
			this.setState({
				popup: null
			});
		}
	},
	onEnter: function() {
		// e.preventDefault();
		console.log('to sector')
		this.props.router.navigate('sector-map', {trigger: true});
	}
})