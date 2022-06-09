// ; Задание 1
// ; В отдельном файле с расширением .js напишите программу, состоящую из функции, возвращающей в качестве результата фунцию,
// ;  проверяющую пароль пользователя:
// ; function getPasswordChecker(password)
// ; Функция должна принимать один параметр - правильное значение пароля.
// ; Функция должна быть реализована с помощью замыкания таким образом, чтобы после получения проверяющей функции невозможно
// ; было каким-либо образом узнать правильный пароль. Возвращаемая функция проверки пароля должно принимать один параметр - пароль,
// ; введенный пользователем для проверки. В качестве результата функция должна возвращать логическое значение true или false
// ; в зависимости от результата проверки.В основном коде программы напишите тестовые вызовы для getPasswordChecker и для
// ; проверочной функции, чтобы убедиться в корректности их работы.

function getPasswordChecker(password = `102030_Fuji`) {
    let pass = password;
    return function(expectant) {
        if (expectant === pass) {
            result = `You are welcome!`
        }
        else {
            result = `Invalid password`
        };
        return result;
    };
};    


a = getPasswordChecker();
console.log(a);
console.log(a(`ergt`));             //  Invalid password
console.log(a(`102030_Fuji`));      //  You are welcome!

