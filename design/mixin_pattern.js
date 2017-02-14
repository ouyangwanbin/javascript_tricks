var extend = function( target ){
   if( arguments.length === 1 ){
       return;
   }
   for(var i=1; i<arguments.length; i++){
      var source = arguments[i];
      for( var prop in source ){
          if( !target[prop] && source.hasOwnProperty(prop) ){
              target[prop] = source[prop];
          }
      } 
   }
}

var Person = function( name ){
    this.name = name;
}

var Speaker = {
    speak:function(){
        console.log( "My name is : " + this.name );
    }
}

var Walker = {
    walk:function(){
       console.log( this.name + " is walking" );
    }
}

extend( Person.prototype, Speaker, Walker );

var p1 = new Person("Wanbin");

p1.speak();
p1.walk();