let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply');
let subtraction = document.querySelector('.subtraction');
let addition = document.querySelector('.addition');
let bracket = document.querySelector('.bracket');
let dot = document.querySelector('.dot');
let equals = document.querySelector('.equals');
let example = document.querySelector('.example');
let delet = document.querySelector('.delete');
let AC = document.querySelector('.AC');
let Percent = document.querySelector('.Percent');
let sum = document.querySelector('.sum');


addingVariable(zero);
addingVariable(one);
addingVariable(two);
addingVariable(three);
addingVariable(four);
addingVariable(five);
addingVariable(six);
addingVariable(seven);
addingVariable(eight);
addingVariable(nine);
addingVariable(divide);
addingVariable(subtraction);
addingVariable(addition);
addingVariable(dot);


// добавление скобок
let breacket = ')'
bracket.onclick = function () {
    breacket === ')' ? breacket = '(' : breacket = ')';
    // if(breacket === ')'){
    //    breacket = '('  
    // } else {
    //     breacket = ')'
    // }
    example.textContent = example.textContent + breacket;
};

// добавление *
multiply.onclick = function () {
    return example.textContent = example.textContent + '*';
};

// функция добавление цифр 
function addingVariable (num) {
    num.onclick = function (){
        return  example.textContent = example.textContent + num.textContent;
    }
};

// удаление 1 элемента
delet.onclick = function () {
    example.textContent = example.textContent.slice (0, -1);
};

// удаление всего
AC.onclick = function () {
    example.textContent = example.textContent.substring (0, -1);
    sum.textContent = 0
};

// поиск 1%
Percent.onclick = function() {
    sum.textContent = sum.textContent / 100;
};


// сумма выражения
equals.onclick = function () {
    let numb = eval(example.textContent) 
    sum.textContent = numb
};

// equals.onclick = function () {
//     let expression = example.textContent
//     let summ = Number(expression)
//     console.log(typeof expression)
//     sum.textContent = summ
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
// нам нужен цикл который будет перебирать массив с якобы выражением и каждую отдельную цифру и действие выводить как число!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let sumv = '2+3-3-1';
// let arr = sumv.split('');
// let operator = 
// function faqe () {
//     let c = 0
//     for (let i = 0 ; i < arr.length; i++) {
        
//         let nextNumber = arr[i + 1]
//         if (arr[i] === '+') continue;
//         if (arr[i] === '-') {
//             c = c - arr[++i]
//             }
//         c += parseInt(arr[i]);
//     }    
//     return c;   
// }
// console.log(faqe())
let sumv = '10+5-8*2';
function calculaterExpretions (expression) {
    const tokens = expression.split(/([+\-*/])/);
    
    let operator = '+';
    let result = 0;

    for ( let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if ( token === '+' || token === '-' || token === '/' || token === '*') {
            operator = token;
        } else {
            let value = parseInt(token);
            if ( operator === '+') {
                result += value;
            } else if ( operator === '-') {
                result -= value;
            } else if ( operator === '/') {
                result = result / value;
            } else if ( operator === '*') {
                result *= value;
            } 
            
        }
    }
    return result
}

// console.log(calculaterExpretions(sumv))
