/*
Написать функцию суммирования значений
Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
*/

function sum(value){

    try {
        if (parseInt(value) || value === 0) {
            var array = [];
            array.push(value);
            return f;
        } else {
            console.log('Insert a number');
            return;
        }

        function f(nextValue) {

            if (parseInt(nextValue) || nextValue === 0) {

                array.push(nextValue);
                return f;

            } else if (nextValue == undefined) {

                var reducer = (accumulator, nextValue) => accumulator + nextValue;
                var res = array.reduce(reducer);

                console.log(res);
                return f;

            } else {
                throw e;
            }
        }
    } catch(e){
        console.log('Insert a number');
    }

}

sum('qert')(0)(2)(3)();
//sum(0)(2)(3)();
