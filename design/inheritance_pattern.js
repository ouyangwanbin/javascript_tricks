var Beverage = function( name, temperature ){
	this.name = name;
	this.temperature = temperature;
}

Beverage.prototype.drink = function( ){
	console.log("I am drinking " + this.temperature + " " + this.name );
}

var Coffee = function( type ){
	Beverage.call(this,"coffee","hot");
	this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);
Coffee.prototype.sip = function( ){
	console.log("I like drinking " + this.type + " " +this.name );
}

var water = new Beverage("water","cold");
var coffee = new Coffee("bold");

water.drink();
coffee.drink();
coffee.sip();
