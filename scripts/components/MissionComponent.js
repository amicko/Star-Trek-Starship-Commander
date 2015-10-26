//dependencies
var React = require('react');

//components

module.exports = React.createClass({
	render: function() {
		return (
			<div className="missionScreenContainer">
				<div className="sectorMapIcon">Sector Map</div>
				<div className="userSettingsIcon">User Settings</div>
				<div className="userHUD">
					<button className="HUDFiller HUDButton">Character Name</button>
					<div className="HUDFiller">Dilithium Amount</div>
					<div className="HUDFiller">Gold-Pressed Latinum Amount</div>
					<button className="HUDFiller HUDButton">Starship Name</button>
				</div>
				<div className="sectorBlockContainer">
					<div className="sectorLoreBlock">
						<h3>Sector Name</h3>
						<div className="sectorImage">SectorImage</div>
						<div className="sectorLoreTitle">Sector Lore</div>
						<div className="sectorLore">Shields up. I recommend we transfer power to phasers and arm the photon torpedoes. Something strange on the detector circuit. The weapons must have disrupted our communicators. You saw something as tasty as meat, but inorganically materialized out of patterns used by our transporters. Captain, the most elementary and valuable statement in science, the beginning of wisdom, is 'I do not know.' All transporters off.
						</div>
					</div>
					<div className="sectorMissionBlock">
						<div className="sectorMission">
							<div className="missionName">Mission Name</div>
							<div className="missionTeaser">Words words words...</div>
							<button className="dropDownIcon">Arrow</button>
						</div>
						<div className="sectorMission">
							<div className="missionName">Mission Name</div>
							<div className="missionTeaser">Words words words...</div>
							<button className="dropDownIcon">Arrow</button>
						</div>
						<div className="sectorMission">
							<div className="missionName">Mission Name</div>
							<div className="missionTeaser">Words words words...</div>
							<button className="dropDownIcon">Arrow</button>
						</div>
						<div className="sectorMission">
							<div className="missionName">Mission Name</div>
							<div className="missionTeaser">Words words words...</div>
							<button className="dropDownIcon">Arrow</button>
						</div>
						<div className="sectorMission">
							<div className="missionName">Mission Name</div>
							<div className="missionTeaser">Words words words...</div>
							<button className="dropDownIcon">Arrow</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
})