class Ninja {
    constructor(name, health = 85, speed = 3, strength = 3,) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Ninja Name: ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`Ninja Name: ${this.name}`);
        console.log(`Ninja Strength: ${this.strength}`);
        console.log(`Ninja Speed: ${this.speed}`);
        console.log(`Ninja Health: ${this.health}`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        console.log(`Ninja Health: ${this.health}`);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name , health, speed, strength);
            this.wisdom = wisdom; 
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake(ninja1.health);

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

console.log(ninja1)

// retun this allows yoyu to chain as shown below
ninja1.sayName().showStats().drinkSake(ninja1.health);