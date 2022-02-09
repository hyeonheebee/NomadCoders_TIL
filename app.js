const caculator = { 
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    multi: function(a,b){
        return a*b;
    },
    squared: function(a,b){
        return a**b;
    },
    
}

const addResult = caculator.add(1,2);
console.log(addResult);

const minusResult = caculator.minus(1,2);
consol.log(minusResult);

const divideResult = caculator.divide(1,2);
console.log(divideResult);

const multiResult = caculator.multi(1,2);
console.log(multiResult);

const squarerdResult = caculator.squared(-1,3);
console.log(squaredResult);