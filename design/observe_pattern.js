var pubsub = (function(){
    var topics = {};
  
    var subscribe = function( type, fn ){
        if( !topics[type] ){
            topics[type] = [];
        }
        if( topics[type].indexOf( fn ) > -1 ){
            return;
        }
        topics[type].push(fn);
    }
    
    var unsubscribe = function( type, fn ){
        if( !topics[type] ){
            return;
        }
        var index = topics[type].indexOf(fn);
        if( index === -1 ){
            return;
        }
        topics[type].splice(index,1);
    }
    
    var publish = function( type, data ){
        if( !topics[type] ){
            return;
        }
        topics[type].map(function(fn){
            fn(data);
        });
    }
    
    return {
        subscribe:subscribe,
        unsubscribe:unsubscribe,
        publish:publish
    }
}());

var fn1 = function( data ){
  console.log( "start 1 " + data );
}
var fn2 = function( data ){
  console.log( "start 2 " + data );
}
pubsub.subscribe("start", fn1)

pubsub.subscribe("start", fn2);

pubsub.publish("start", "hehe!");

pubsub.unsubscribe("start", fn1);

pubsub.publish("start", "haha!");


