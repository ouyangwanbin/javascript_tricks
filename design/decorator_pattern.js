var Beverage = function( ){
    this._cost = 0;
}

Beverage.prototype.cost = function( ){
    return this._cost;
}

var BeverageDecorator = function( beverage ){
    Beverage.call(this);
    this.beverage = beverage;
}

BeverageDecorator.prototype = Object.create(Beverage.prototype);
BeverageDecorator.prototype.cost = function( ){
    return this._cost + this.beverage.cost();
}

var Small = function( coffee ){
    BeverageDecorator.call(this,coffee);
    this._cost = -1;
}

Small.prototype = Object.create(BeverageDecorator.prototype);

var Coffee = function( ){
    Beverage.call(this);
    this._cost = 5;
}

Coffee.prototype = Object.create(Beverage.prototype);

var coffee = new Coffee();
coffee = new Small(coffee);
console.log(coffee.cost());//4