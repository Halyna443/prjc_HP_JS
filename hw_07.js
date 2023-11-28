// Реалізуйте наступну систему, схожу до розглянутої на вебінарі:

// 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)
// 3) у кожного класу має бути своя унікальна властивість
// 4) у кожного класу має бути приватна властивість
// 4) у двох класів має бути спільний предок та спільний метод характерний тільки для них
// 5) у всіх чотирьох класів має бути один (крім проміжних) клас-предок.

class Entity {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    static genericInfo() {
        console.log("This is a general entity.");
    }

    attack() {
        console.log(`${this.name} attacks with power ${this.power}.`);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage. Health: ${this.health}`);
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Power: ${this.power}, Health: ${this.health}`);
    }
}

class Ogre extends Entity {
    #clubSize
    constructor(name, clubSize, roarVolume) {
        super(name, 20, 100);
        this.#clubSize = clubSize;
        this.roarVolume = roarVolume;
    }

    static specialInfo() {
        console.log("Ogres are known for their brute strength, they are cannibals.");
    }

    smash() {
        console.log(`${this.name} performs a smashing attack with a ${this.#clubSize}-sized club.`);
    }
}

class Cyclops extends Entity {
    #laserIntensity
    constructor(name, eyeColor, laserIntensity) {
        super(name, 30, 120);
        this.eyeColor = eyeColor;
        this.#laserIntensity = laserIntensity;
    }

    static specialInfo() {
        console.log("Cyclops are one-eyed giants, they are cannibals.");
    }

    laserBeam() {
        console.log(`${this.name} shoots a powerful ${this.#laserIntensity}-intensity laser beam with ${this.eyeColor} eyes.`);
    }
}

class MythicalCreature extends Entity {
    constructor(name, power, health, specialAbility) {
        super(name, power, health);
        this.specialAbility = specialAbility;
    }

    static commonInfo() {
        console.log("Mythical Creature has unique abilities.");
    }

    useSpecialAbility() {
        console.log(`${this.name} uses its special ability: ${this.specialAbility}`);
    }
}

class Yeti extends MythicalCreature {
    #furColor
    constructor(name, furColor, coldResistance) {
        super(name, 25, 90, "Freezing Roar");
        this.#furColor = furColor;
        this.coldResistance = coldResistance;
    }

    static specialInfo() {
        console.log("Yetis are snowman who can freeze their opponents with a roar.")
    }

    freeze() {
        console.log(`${this.name} freezes the opponent with its ${this.coldResistance}-resistant ${this.#furColor} fur.`);
    }
}

class Troll extends MythicalCreature {
    #regeneRate
    constructor(name, regeneRate, uglyFactor) {
        super(name, 15, 80, "Regenerative Roar");
        this.#regeneRate = regeneRate;
        this.uglyFactor = uglyFactor;
    }

    static specialInfo() {
        console.log("Trolls are harmful, ugly creatures; have the ability to regenerate health with a roar.");
    }

    regenerate() {
        console.log(`${this.name} begins to regenerate health at a rate of ${this.#regeneRate} per second.`);
    }
}

Entity.genericInfo();
Ogre.specialInfo();
const ogre = new Ogre("Gronk", "large", "loud");
ogre.attack();
ogre.smash();
ogre.takeDamage(30);
ogre.displayInfo();

Cyclops.specialInfo();
const cyclops = new Cyclops("Cyclo", "red", "high");
cyclops.attack();
cyclops.laserBeam();
cyclops.takeDamage(40);
cyclops.displayInfo();

MythicalCreature.commonInfo();
Yeti.specialInfo();
const yeti = new Yeti("Yeto", "white", "high");
yeti.attack();
yeti.freeze();
yeti.useSpecialAbility();
yeti.takeDamage(20);
yeti.displayInfo();

Troll.specialInfo();
const troll = new Troll("Trundle", 5, "very tall");
troll.attack();
troll.regenerate();
troll.useSpecialAbility();
troll.takeDamage(10);
troll.displayInfo();
