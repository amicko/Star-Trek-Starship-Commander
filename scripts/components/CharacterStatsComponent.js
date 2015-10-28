//dependencies
var React = require('react');

//components

module.exports = React.createClass({
	getInitialState: function() {
		return {
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
	render: function() {
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
				<div className="starshipBox">
					<div className="starshipStatsBox">
						<div className="starshipImage">Image</div>
						<div className="starshipStatBox">Range</div>
						<div className="starshipStatBox">Weapons</div>
						<div className="starshipStatBox">Shields</div>
					</div>
					<div className="chooseStarshipBox">
						<button className="changeStarship" onClick={this.onChangeStarship}>Change Starship</button>
					</div>
				</div>
			);
		}
		else {
			starship = (
				<div className="starshipBox">List Component</div>
			);
		}

		if(this.state.captain === 'captain') {
			captain = (
				<div className="personnelBox">
					<div className="position">CAPTAIN</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">Name</div>
					<div className="personnelStatBox">
						<div className="stat">Officer</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Security</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Medical</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Science</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Engineer</div>
						<div className="box">#</div>
					</div>
				</div>
			);
		}
		else {
			captain = (
				<div className="personnelBox">List Component</div>
			);
		}
		if(this.state.firstOff === 'firstOff') {
			firstOff = (
				<div className="personnelBox">
					<div className="position">FIRST OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">Name</div>
					<div className="personnelStatBox">
						<div className="stat">Officer</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Security</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Medical</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Science</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Engineer</div>
						<div className="box">#</div>
					</div>
				</div>
			);
		}
		else {
			firstOff = (
				<div className="personnelBox">List Component</div>
			);
		}
		if(this.state.helmsman === 'helmsman') {
			helmsman = (
				<div className="personnelBox">
					<div className="position">HELMSMAN</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">Name</div>
					<div className="personnelStatBox">
						<div className="stat">Officer</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Security</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Medical</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Science</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Engineer</div>
						<div className="box">#</div>
					</div>
				</div>
			);
		}
		else {
			helmsman = (
				<div className="personnelBox">List Component</div>
			);
		}
		if(this.state.tacOff === 'tacOff') {
			tacOff = (
				<div className="personnelBox">
					<div className="position">TACTICAL OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">Name</div>
					<div className="personnelStatBox">
						<div className="stat">Officer</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Security</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Medical</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Science</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Engineer</div>
						<div className="box">#</div>
					</div>
				</div>
			);
		}
		else {
			tacOff = (
				<div className="personnelBox">List Component</div>
			);
		}
		if(this.state.medOff === 'medOff') {
			medOff = (
				<div className="personnelBox">
					<div className="position">MEDICAL OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">Name</div>
					<div className="personnelStatBox">
						<div className="stat">Officer</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Security</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Medical</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Science</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Engineer</div>
						<div className="box">#</div>
					</div>
				</div>
			);
		}
		else {
			medOff = (
				<div className="personnelBox">List Component</div>
			);
		}
		if(this.state.sciOff === 'sciOff') {
			sciOff = (
				<div className="personnelBox">
					<div className="position">SCIENCE OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">Name</div>
					<div className="personnelStatBox">
						<div className="stat">Officer</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Security</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Medical</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Science</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Engineer</div>
						<div className="box">#</div>
					</div>
				</div>
			);
		}
		else {
			sciOff = (
				<div className="personnelBox">List Component</div>
			);
		}
		if(this.state.engOff === 'engOff') {
			engOff = (
				<div className="personnelBox">
					<div className="position">ENGINEERING OFFICER</div>
					<div className="personnelImage">IMAGE</div>
					<div className="personnelName">Name</div>
					<div className="personnelStatBox">
						<div className="stat">Officer</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Security</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Medical</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Science</div>
						<div className="box">#</div>
					</div>
					<div className="personnelStatBox">
						<div className="stat">Engineer</div>
						<div className="box">#</div>
					</div>
				</div>
			);
		}
		else {
			engOff = (
				<div className="personnelBox">List Component</div>
			);
		}
		return (
			<div className="createCharacterContainer" onClick={this.onBackground}>
				<a href="#sector/number" className="dashboardIcon" onClick={this.onReturn}>GO BACK</a>
				<a href="#" className="userSettingsIcon">USER SETTINGS</a>
				<div className="statsContainer">
					<div className="characterStatsBox">
						<div className="characterName">Character Name</div>
						<div className="characterXp">XP</div>
						<div className="characterLevel">Level</div>
						<div className="CharacterDilithium">Dilithium #</div>
						<div className="goldPressedLatinum">Gold-Pressed Latinum #</div>
					</div>
					{starship}
					<div className="seniorStaffContainer">
						{captain}
						{firstOff}
						{helmsman}
						{tacOff}
						{medOff}
						{sciOff}
						{engOff}
						<div className="buttons">
							<button className="changePersonnel" onClick={this.onChangeCaptain}>Change</button>
							<button className="changePersonnel" onClick={this.onChangeFirstOff}>Change</button>
							<button className="changePersonnel" onClick={this.onChangeHelmsman}>Change</button>
							<button className="changePersonnel" onClick={this.onChangeTacOff}>Change</button>
							<button className="changePersonnel" onClick={this.onChangeMedOff}>Change</button>
							<button className="changePersonnel" onClick={this.onChangeSciOff}>Change</button>
							<button className="changePersonnel" onClick={this.onChangeEngOff}>Change</button>
						</div>
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
		this.props.router.navigate('sector/number', {trigger: true});
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