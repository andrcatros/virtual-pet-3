const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
    it('increments the fitness by -3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});
describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});
describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');

        pet.hunger = 7;
        pet.feed();

        expect(pet.hunger).toEqual(4);
    });
    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });
});
describe('checkUp', () => {
    it('informs if the pet needs walking', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I need a walk');
    });
    it('informs if the pet is hungry', () => {
        const pet = new Pet('Fido');

        pet.hunger = 6;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry');
    });
    it('informs if the pet is hungry and needs walking', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
        pet.hunger = 6;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
    it('informs if the pet is doing well', () => {
        const pet = new Pet('Fido');

        pet.fitness = 18;
        pet.hunger = 1;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I feel great!');
    });
});
describe('isAlive', () => {
    it('checks to see if the pet is too old', () => {
        const pet = new Pet('Fido');

        pet.age = 31;

        expect(pet.isAlive).toBe(false);
    });
    it('checks to see if the pet has starved', () => {
        const pet = new Pet('Fido');

        pet.hunger = 11;

        expect(pet.isAlive).toBe(false);
    });
    it('checks to see if the pet has died from lack of exercise', () => {
        const pet = new Pet('Fido');

        pet.fitness = -1;

        expect(pet.isAlive).toBe(false);
    });
    it('returns true if all the values are below minimum and maximum thresholds and the pet is alive', () => {
        const pet = new Pet('Fido');

        pet.age = 15;
        pet.hunger = 4;
        pet.fitness = 7;

        expect(pet.isAlive).toBe(true);
    });
});