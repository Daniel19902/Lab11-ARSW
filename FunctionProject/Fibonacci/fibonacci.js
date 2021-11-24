
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