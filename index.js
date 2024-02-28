// function callback(){
//     console.log("this is the callback function");
// }
function receivesAFunction(callback){
callback();
}
function returnsANamedFunction(){
    return function namedfunction(){

    };
}
function returnsAnAnonymousFunction(){
    return function (){
        
    };
    
}