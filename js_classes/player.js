'use strict';

class Player {

	constructor(name, team, model, score) {
		this.name = name;
		this.team = team;
		this.model = model;
		this.score = score;
	}

	get score() {
		return this._score;
	}

	set score(value) {
		if (value < 100) {
			alert("You haven't won yet ;)");
		}
		else {
			alert("You won the game");
		}
		return;

		this._score = value;
	}

	/*static staticfunc() {
			return "static response - team color: " ;
		}*/

	static staticfunc() {
		alert(this == Player);
	}

	display() {
		alert(this.name);
	}

	displayall() { return "Player name: " + this.name + ", Team: " + this.team + ", Model: " + this.model + " | "; }

}

let player = new Player("K1", "Red", "Cyborg", "100");

player.display();

// window.alert(player.staticfunc());

document.write(player.displayall());

Player.staticfunc();
