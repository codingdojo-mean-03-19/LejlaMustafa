function Ninja(name) {
	this.name = name;
	this.health = 100;
	const speed = 3;
	const strength = 3;

	this.sayName = function() {
		console.log("My ninja name is " + name);
	}

	this.showStats = function() {
		console.log('Name: ' + this.name, 'Health: ' + this.health, 'Speed: ' + speed, 'Strength: ' + strength);
	}

	this.drinkSake = function() {
		this.health += 10;
	}

	this.punch = function(opponent) {
		if(!(opponent instanceof Ninja)){
            console.log(opponent + " is not a Ninja");
        }
		opponent.health -= 5;
		console.log (opponent.name + " was punched by " + this.name + " and lost 5 Health!");
	}

	this.kick = function(opponent) {
		if(!(opponent instanceof Ninja)){
            console.log(opponent + " is not a Ninja");
        }
        const lost_health = strength * 5;
		opponent.health -= lost_health;
		console.log(opponent.name + " was kicked by " + this.name + " and lost " + lost_health + " Health!");
	}
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength