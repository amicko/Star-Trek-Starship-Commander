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
				<CharacterListComponent key={character.id} characterId={character.id} name={character.get('Name')} level={character.get('XP')} starship={character.get('Starship').get('Name')} dilithium={character.get('Dilithium')} gpl={character.get('GoldPressedLatinum')} router={r}/>
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
				<a href="#"className="dashboardIcon"></a>
				<a href="#settings"className="userSettingsIcon"></a>
				<div className="optionBoxContainer">
					<a href="#create-character" className="optionBox gradient-box"><span className="span">CREATE NEW CHARACTER</span></a>
					<a href="#" className="optionBox gradient-box" onClick={this.onChoose}>{dropDown}</a>
					<a href="#" className="optionBox gradient-box"><span className="span">HOW TO PLAY</span></a>
				</div>
				<div className="footerBox">
					<div className="footerImage">Image</div>
					<div className="footerText">Welcome, Commander! To begin, create a new character or select the How to Play!</div>
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