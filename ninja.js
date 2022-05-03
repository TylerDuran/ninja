class Ninja {
    constructor(name, health = 85, speed = 3, strength = 3,) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Ninja Name: ${this.name}`);
    }
    showStats() {
        console.log(`Ninja Name: ${this.name}`);
        console.log(`Ninja Strength: ${this.strength}`);
        console.log(`Ninja Speed: ${this.speed}`);
        console.log(`Ninja Health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`Ninja Health: ${this.health}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake(ninja1.health);