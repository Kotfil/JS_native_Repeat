// let numbers = [1,10,15,20,-5,8,14];
//
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//
// }
// numbers.forEach( (item,i) =>  {
// console.log(item)
// console.log(i)
// });

// let numbers = [1, -10, 15, 20, -5, 8, 14];
// let neg = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         neg.push(numbers[i]);
//     }
// }
//
// console.log(neg);
//
// let neg2 = numbers.filter(function (item) {
//     return item > 0;
// });
//
// console.log(neg2);

// let data = ['1','-10','15','20','-5','8','14','5'];
//
// let numbers = [];
//
// for (let i = 0; i < data.length; i++) {
//     numbers.push(parseInt(data[i]));
// }
// console.log(numbers);
// let numbers2 = data.map(function (item) {
//     return parseInt(item);
// });
//
// console.log(numbers2);

// let numbers = [1,-10,15,20,-5,8,14];
//
// let allPos = true;
//
// for(let i =0; i< numbers.length;i++){
//     if(numbers[i] <0) {
//         allPos = false;
//         break;
//     }
// }
// console.log(allPos)
//
// let allPos2 = numbers.every(function (item) {
//     return item >= 0;
//
// });
//
//  console.log(allPos2);
//
// let numbers = [1,-10,15,20,-5,8,14];
//
// let hasNeg = false;
//
// for(let i = 0; i< numbers.length;i++){
//     if(numbers[i] < 0) {
//         allPos = true;
//         break;
//     }
// }
// console.log(hasNeg);
//
// let hasNeg2 = numbers.some(function (item) {
//     return item < 0;
//
// });
// console.log(hasNeg2);

// let numbers = [1,-10,15,20,-5,8,14];
// let sum = 0;
//
// for(let i = 0;i < numbers.length;i++) {
//     sum += numbers[i];
// }
//
// // console.log(sum);
//
// let sun2 = numbers.reduce(function (total,item) {
//     console.log(total);
//     console.log(item);
//     return total + item;
//
// },0);