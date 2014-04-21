// $(document).on('ready', function() {

// });


// create all required objects for restaurant
var Fooditem = function(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
    this.toString = function() {
        return "Name: " + this.name + " Calories: " + this.calories + " Is Vegan: " + this.vegan + " Is Gluten Free: " + this.glutenFree + " Is Citrus Free: " + this.citrusFree;

    }
}


var Drink = function(name, description, price, ingredients) {

    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    this.toString = function() {
        return "Name: " + this.name + " Description: " + this.description + " Price: " + this.price + " Ingredients: " + this.ingredients.map(function(z) {
            return z.name;
        });

    }
};

var Plate = function(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    this.toString = function() {
        return "Name: " + this.name + " Description: " + this.description + " Price: " + this.price + " Ingredients: " + this.ingredients.map(function(z) {
            return z.name;
        });
    };
    this.isVegan = function() {
        return this.ingredients.map(function(z) {
            return z.vegan;
        })
    }
    this.isGlutenFree = function() {
        return this.ingredients.map(function(z) {
            return z.glutenFree;
        })
    }
    this.isCitrusFree = function() {
        return this.ingredients.map(function(z) {
            return z.citrusFree;
        })
    }

};

var Order = function(plates) {
    this.plates = plates;
    this.toString = function() {
        return "Plates: " + this.plates.map(function(z) {
            return z.name;
        });

    }
};
var Menu = function(plates) {
    this.plates = plates;
    this.toString = function() {
        return "Plates:" + this.plates.map(function(z) {
            return " " + z.name;
        });

    }

};
var Restaurant = function(name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
    this.toString = function() {
        return "Plates:" + this.menu.plates.map(function(z) {
            return " " + z.name;
        });

    }
};

var Customer = function(diet) {
    this.dietaryPreference = diet;
    this.toString = function() {
        return "Dietary Preferences: " + this.dietaryPreference;
    }
};

//instantiate all variables

//ingredients
var cornChips = new Fooditem('Corn Chips', 200, false, true, false);
var groundBeef = new Fooditem('Beef Patty', 500, false, true, true);
var tomato = new Fooditem("tomato", 25, true, true, true);
var avacados = new Fooditem("avacados", 55, true, true, true);
var wheatTortilla = new Fooditem("tortilla", 425, false, false, false);
var tequilla = new Fooditem("tequilla", 25, true, true, true);
var limeJuice = new Fooditem("tequilla", 25, true, true, false);

//plates
var burritoPlate = new Plate('Burrito Plate', 'plain burrito', 8, [groundBeef, tomato, avacados, wheatTortilla]);
var guacamolePlate = new Plate('Guacamole Plate', 'green goo', 12, [avacados, tomato, limeJuice, cornChips]);
var margaritaDrink = new Drink('Simple Marg', 'booze', 4, [tequilla, limeJuice]);

//menu
var theMenu = new Menu([burritoPlate, guacamolePlate, margaritaDrink]);

//restaurant
var theRestaurant = new Restaurant('Refactoru Cafe', 'Cheap brain food', theMenu);

//print theRestaurant's info
console.log(theRestaurant.toString());