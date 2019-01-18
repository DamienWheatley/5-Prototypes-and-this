const animal = {
    init: function (name, species) {
        this.name = name,
        this.species = species,
        this.hunger = 25;

    },
    feed: function () {
        if(this.hunger < 100){
            let that = this;
            this.hunger += 25;
            if(this.species === 'Zebra'){
                return feedZebraGrass(that);
            };
            if(this.species === 'Chinchilla'){
                return feedChinchillaNuts(that);
            };
            if(this.species === 'Lion'){
                return feedLionLarge(that);
            };
            if(this.species === 'Ferret'){
                return feedFerretSmall(that);
            };
        } else {
            return (this.name + " is not hungry.");
        }
    }
};

const zoo = {
    cash: 4000,
    spend: function (amount){
        if (this.cash < amount){
            throw "Not enough money!";
        }
        this.cash -= amount;
        console.log(`Remaining funds: £${this.cash}`);
    }
};

const herbivore = Object.create(animal);
const carnivore = Object.create(animal);

herbivore.feedHerbivoreFood = function(){
    if(this.hunger < 100){
        const foodCost = 200;
        zoo.spend(foodCost);
        return(this.feed() + " You spent £" + foodCost);
    } else {
        console.log(`Remaining funds: £${zoo.cash}`);
        return(this.feed());
    }
};

carnivore.feedCarnivoreFood = function(){
    if(this.hunger < 100){
        const foodCost = 500;
        zoo.spend(foodCost);
        return(this.feed() + " You spent £" + foodCost);
    } else {
        console.log(`Remaining funds: £${zoo.cash}`);
        return(this.feed());
    }
};

function feedZebraGrass(that){
    return("You fed " + that.name + " some grass. Its hunger is now " + that.hunger + ".");
};

function feedChinchillaNuts(that){
    return("You fed " + that.name + " some nuts and berries. Its hunger is now " + that.hunger + ".");
};

function feedLionLarge(that){
    return("You fed " + that.name + " some large prey. Its hunger is now " + that.hunger + ".");
};

function feedFerretSmall(that){
    return("You fed " + that.name + " some small prey. Its hunger is now " + that.hunger + ".");
};

const animalCreator = {
    createAnimal: function(name, speciesName, animalType) {
        const animal = Object.create(animalType);
        animal.init(name, speciesName);
        return animal;
    },

    createZebra: function(name) {
        return this.createAnimal(name, 'Zebra', herbivore);
    },

    createChinchilla: function(name) {
        return this.createAnimal(name, 'Chinchilla', herbivore);
    },

    createLion: function(name) {
        return this.createAnimal(name, 'Lion', carnivore);
    },

    createFerret: function(name) {
        return this.createAnimal(name, 'Ferret', carnivore);
    }
};

function getButton(index) {
    return button = {
        onClick: function(name){
            switch(index){
                case 0: return animalCreator.createZebra(name);
                case 1: return animalCreator.createChinchilla(name);
                case 2: return animalCreator.createLion(name);
                case 3: return animalCreator.createFerret(name);
            }
        }
    }
};

const zebraButton = getButton(0);
const chinchillaButton = getButton(1);
const lionButton = getButton(2);
const ferretButton = getButton(3);

const martyTheZebra = zebraButton.onClick('Marty');
const cillaTheChinchilla = chinchillaButton.onClick('Cilla');
const alexTheLion = lionButton.onClick('Alex');
const marlonTheFerret = ferretButton.onClick('Marlon');