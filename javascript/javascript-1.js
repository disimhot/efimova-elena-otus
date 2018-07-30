/*
Написать функцию суммирования значений
Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.
sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
*/

function sum(value){

        if (parseInt(value) || value === 0) {
            var array = [];
            array.push(value);
            return f;
        } else {
            throw new Error('Invalid argument, number expected');
        }

        function f(nextValue) {

            if (parseInt(nextValue) || nextValue === 0) {

                array.push(nextValue);
                return f;

            } else if (nextValue == undefined) {

                var reducer = (accumulator, nextValue) => accumulator + nextValue;
                var res = array.reduce(reducer);

                console.log(res);

            } else {
                throw new Error('Invalid argument, number expected');
            }
        }

}

sum(0)(2)(3)();
sum('sdfg')(2)(3)();