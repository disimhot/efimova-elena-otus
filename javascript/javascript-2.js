/*promiseReduce - работа с асинхронными функциями
Написать функцию `promiseReduce`, которая получает на вход
- массив асинхронных функций `asyncFunctions`, возвращающих `Promise`,
- `reduce` функцию и
- стартовое значение `initialValue`*/

var fn1 = () => {
    console.log('fn1');
    return Promise.resolve(2);
}


var fn2 = () => new Promise(resolve => {
    console.log('fn2');
    setTimeout(() => resolve(3), 1000);
})

function promiseReduce(asyncFunctions, reduce, initialValue) {
    var promise = Promise.resolve();
    var accum = initialValue;

    asyncFunctions.forEach(function (func) {
        promise = promise
            .then(() => func())
            .then((result) => {
                accum = reduce(result, accum);
                return accum;
            })
    })
    return promise;
}


promiseReduce([fn1, fn2], function (memo, value) {
        console.log('reduce');
        return (memo * value);
    },
    4
)
    .then(console.log);


/*

Вывод в консоль
fn1
reduce
fn2
reduce
2*/