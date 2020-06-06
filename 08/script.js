// let arr1 = ['Semen','Vitalik'
// ,'Sasha','Alena','Igor'];
//
// let arr2 = arr1.map((e) => {
//     if (arr3(el)) {
//         return 1;
//     }else{
//         return 0;
//     }
// });
// let arr2 = arr3;
//
// console.log (arr3);


// cycle = () => {
//     let a = [1, 2, 3, 4, 5, 6, 7];
//     for (i = 0; i < a.length; i++) {
//         console.log(a[i])
//     }
// }
// alerter = () => {
//     setTimeout("alert('Привет')", 1000);
//         clearTimeout()
// }
//
//
// q = document.getElementById(1);
// w = document.getElementById(2);

// console.log('Hello')


// let arr = [89,22,45,213,44,554,23,44,32];
//
// let max = arr[0]
//
// for (i = 0; i < arr.length; i++) {
//     if(arr[i] >= max ) {
//         max = arr[i];
//         console.log('Setting max to ' + max);
//     }
// }
//
// console.log(max)


// function add(arr) {
//     return console.log(arr.toString())
// }
// add([89,22,45,213,44,554,23,44,32])
//
// f = document.getElementById('3')
//
// dd = () => {
//     alert('Hello my name is Filipp, i am front end developer')
// }

// function divisible(num) {
//     return !num % 100 === 0;
// }
// console.log(divisible())
//
//
//  concatName = (firstName, lastName) => {
//
// }
// console.log(concatName(lastName.concat(' ',firstName))
//
// function convert(minutes) {
//     return minutes / 60
// }
//
// console.log(convert(2))

let a = {
    name: 'fil',
    age:70,
    names: ['Vika','Filya'],
    dw: {
        ages: 90
    }
}


let b = {...a};
b.names.push('Vika')
b.dw.ages = 95
b.name = 'SsSSS'
console.log(a)