var dom = (function(){
    var _counter = 0;
    var _generatorId = function(){
       return "Custem" + _counter++;
    }
    var create = function( tagName, id ){
       var el = document.createElement(tagName);
       el.id = id || _generatorId( );
       return el;
    }
    return{
        create:create
    }
}());