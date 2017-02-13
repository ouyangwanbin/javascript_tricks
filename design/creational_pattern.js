var Person = function( firstName, lastName ){
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.sayName = function( ){
	console.log("My name is " + this.firstName + " " + this.lastName );
}

var p1 = new Person("Wanbin", "Ouyang");
var p2 = new Person("Wanchao", "Ouyang");

p1.sayName();
p2.sayName();