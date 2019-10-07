/*
Написать функцию суммирования значений
Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
*/


function sum(value) {
    let res = value;
    function f(nextValue) {
        if (parseInt(nextValue)) {
            res += nextValue;
            return f;
        } else if (nextValue === undefined) {
            return res;
        } else {
            console.log('Insert a number');
            return sum;
        }
    }
    return f
}
console.log(sum(1)(2)(10)(-55)(90)());
console.log(sum(5)(2)());
