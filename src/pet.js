const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype = {
    get isAlive() {
        return this.age < MAXIMUM_AGE && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error(this.name + " is no longer alive :(");
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error(this.name + " is no longer alive :(");
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error(this.name + " is no longer alive :(");
    }
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error(this.name + " is no longer alive :(");
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk'
    } else if (this.fitness <= 3) {
        return 'I need a walk'
    } else if (this.hunger >= 5) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
}

module.exports = Pet;