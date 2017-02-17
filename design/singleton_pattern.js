var dom = (function(){
    var _counter = 0;
    var _instance;
    var _generatorId = function(){
       return "Custem" + _counter++;
    }
    var create = function( tagName, id ){
       var el = document.createElement(tagName);
       el.id = id || _generatorId( );
       return el;
    }
    var getInstance = function( ){
        if( !_instance ){
            _instance = {
                create:create
            }
        }
        return _instance;
    }
    return {
        getInstance:getInstance
    }
}());