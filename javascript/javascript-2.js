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
    var accum = initialValue;
    var promise = Promise.resolve();

    asyncFunctions.forEach(function (func) {
        promise = promise
            .then(()=> func())
            .then((result)=>{
                return reduce(result, accum);
            })
    })
            return promise;
}



promiseReduce([fn1, fn2],function (memo, value) {
        console.log('reduce');
        return( memo * value);
    },
    3
)
    .then(console.log);





/*

Вывод в консоль
fn1
reduce
fn2
reduce
2*/