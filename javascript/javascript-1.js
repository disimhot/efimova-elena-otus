/*
Написать функцию суммирования значений
Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
*/

function sum(value){
    if (parseInt(value)){
        var array = [];
        array.push(value);
        return f;
    } else {
        console.log('Insert a number');
        return sum;
    }

    function f(nextValue){

        if(parseInt(nextValue)) {
            array.push(nextValue);
            return f
        } else if(nextValue == undefined) {
            var reducer = (accumulator, nextValue) => accumulator + nextValue;
            var res = array.reduce(reducer);

            console.log(res);
            return f;
        } else {
            console.log('Insert a number');
            return sum;
        }


    }

}
sum(1)(2)(10)(-55)(90)();
sum(1)(2);
sum(1)(2)();