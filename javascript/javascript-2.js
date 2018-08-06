/*promiseReduce - работа с асинхронными функциями
Написать функцию `promiseReduce`, которая получает на вход
- массив асинхронных функций `asyncFunctions`, возвращающих `Promise`,
- `reduce` функцию и
- стартовое значение `initialValue`*/

var fn1 = () => {
    console.log('fn1');
    return Promise.resolve(1);
}


var fn2 = () => new Promise(resolve => {
    console.log('fn2');
    setTimeout(() => resolve(2), 1000);
})

function promiseReduce(asyncFunctions, reduce, initialValue) {

    return new Promise( resolve => {
        var accum;

        asyncFunctions.reduce(
            (promise, index) => promise().then(function(result) {
                if(accum === undefined){
                    reduce(result, initialValue);
                    accum = result*initialValue;
                }else {
                    reduce(accum, result)
                    accum = accum*result;
                }
            })
        )
        resolve();
    })
}




promiseReduce([fn1, fn2],function (memo, value) {
        console.log('reduce');
        memo * value;
        console.log(memo * value);
    },
    2
)
    .then(console.log);





/*

Вывод в консоль
fn1
reduce
fn2
reduce
2*/