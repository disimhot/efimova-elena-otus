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
        var accum = [];
        var numberOfPromises = asyncFunctions.length;

            asyncFunctions.forEach((promise, index) => {
                    promise().then((result) => {
                            accum[index] = result;
                            numberOfPromises--;
                            if (numberOfPromises === 0) {
                                 accum = accum.reduce(function (a, b) {
                                    return a * b;
                                });
                                reduce(accum, initialValue);
                                //return accum;
                            }
                        })
                }
            )
        }
    )
}



promiseReduce([fn1, fn2],function (memo, value) {
        console.log('reduce');
        res = memo * value;
        console.log(res);
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