
var bigInt = require("big-integer");
module.exports = async function(context, req){


    let mapa = new Map();
    let nth = req.body.nth;
    let answer= bigInt.zero;

    answer = fibonacci(nth);

    function fibonacci(nth){
        if (mapa.has(nth)){
            return mapa.get(nth);
        }
        else if(nth == 0){
            valor = 0;
        }else if( nth == 1){
            valor = 1;
        }else {
            valor = fibonacci(nth-1)+ fibonacci(nth-2);
        }

        mapa.set(nth, valor);
        return valor;

    }

    context.res = {
        body: JSON.stringify(answer.toString())
    };

}
/**
 var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0){
        throw 'must be greater than 0';
    }
    else if (nth === 0){
        answer = nth_2;
    }
    else if (nth === 1){
        answer = nth_1;
    }
    else {
        for (var i = 0; i < nth - 1; i++) {
            answer = nth_2.add(nth_1);
            nth_2 = nth_1;
            nth_1 = answer;
        }
    }
    context.log(answer.toString());
    context.res = {
        body: JSON.stringify(answer.toString())
    };

}

*/