// $(document).on('ready', function() {

// });


// create all required objects for restaurant
var Fooditem = function(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree
};
Fooditem.prototype.toString = function() {
    return "Name: " + this.name + " Calories: " + this.calories + " Is Vegan: " + this.vegan + " Is Gluten Free: " + this.glutenFree + " Is Citrus Free: " + this.citrusFree;
};

var EdibleCombinations = (function() {

    function EdibleCombinations(name, description, price, ingredients) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
    };
    EdibleCombinations.prototype.toString = function() {
        return "Name: " + this.name + " Description: " + this.description + " Price: " + this.price + " Ingredients: " + this.ingredients.map(function(z) {
            return z.name;
        });
    }
    EdibleCombinations.prototype.isVegan = function() {
        return this.ingredients.every(function(z) {
            return z.vegan;
        })
    }
    EdibleCombinations.prototype.isGlutenFree = function() {
        return this.ingredients.every(function(z) {
            return z.glutenFree;
        })
    }
    EdibleCombinations.prototype.isCitrusFree = function() {
        return this.ingredients.every(function(z) {
            return z.citrusFree;
        })
    }
    return EdibleCombinations;
})();


var Drink = function(name, description, price, ingredients) {
    EdibleCombinations.call(this, name, description, price, ingredients);
}
Drink.prototype = new EdibleCombinations();

var Plate = function(name, description, price, ingredients) {
    EdibleCombinations.call(this, name, description, price, ingredients);
};
Plate.prototype = new EdibleCombinations();


var ListsOfPlates = function(plates) {
    this.plates = plates;
}
ListsOfPlates.prototype.toString = function() {
    return this.plates.map(function(z) {
        return "" + z.toString();
    });
}

var Order = function(plates) {
    ListsOfPlates.call(this, plates);
};
Order.prototype = new ListsOfPlates();

var Menu = function(plates) {
    ListsOfPlates.call(this, plates);
};
Menu.prototype = new ListsOfPlates();

var Restaurant = function(name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;

};
Restaurant.prototype.toString = function() {
    return "Menu has these Plates:" + this.menu.plates.map(function(z) {
        return " " + z.name;
    });

}

var Customer = function(diet) {
    this.dietaryPreference = diet;

};
Customer.prototype.toString = function() {
    return "Dietary Preferences: " + this.dietaryPreference;
}

//instantiate all variables

//ingredients
var cornChips = new Fooditem('Corn Chips', 200, false, true, false);
var groundBeef = new Fooditem('Ground Beef', 500, false, true, true);
var tomato = new Fooditem("tomato", 25, true, true, true);
var avacados = new Fooditem("avacados", 55, true, true, true);
var wheatTortilla = new Fooditem("tortilla", 425, false, false, true);
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