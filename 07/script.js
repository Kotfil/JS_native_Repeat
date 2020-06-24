// let a = {
//     name: 'Fillipko',
//     protocool: "https",
//     maxStudentsCount: 10,
//     isOnline: true,
//     students: ['ivan', 'andrey', 'farid'],
//     classroom: {
//         teather: {
//             name: 'wew',
//             age:18
//         }
//     }
// }
//
// let b = {...a};

// a.name = 'Blabla';
// a.isOnline = true;
// a.classroom.teather = 'Dmitiy';
// a.students.push('Vasilij')


// b.name = '21333'
// // console.log (a);
// b.students.shift('Vadim')
// b.students.unshift('Vlad')
// console.log (b);
// const p = prompt('text')
// console.log(typeof p)

// const a = ['Fil'];
//
// a.push('Viktorya');
//
// alert(a)
//
//
// const person = {
//     name: 'Fil',
//     age: '22'
// }
//
// person.name = 'Bob'
// console.log(person)

// function square(x) {
//     return x*x
// }
//
// console.log(square(5))

// square = x => x*x
// console.log(square(5))

// const arr = ['1','3','2','4'];
//
// const res = arr
//     .map((el) => parseInt(el))
//     .filter((num) => num%2)
//     .reduce((max, value) => Math.max(max,value), 0)
// console.log(res)


// const greeter = {
//     greet: function (name) {
//         console.log('Hello', name)
//     },
//     greetAll: function (names) {
//         names.forEach((name) => this.greet(name) )
//     }
// }
//
// greeter.greetAll(['FIl','Bob','Vadim','Stepan']);


// function max(a,b,...numbers) {
// console.log(numbers)
// }
//
// max(1,2,3)

// const fff2 = [1, 2, 55];
// const arr2 = [1, 8, 3];
//
// const shallowCopy = [...fff2, ...arr2, 80];
//
// console.log(shallowCopy)


//const firstName = person.firstName;
//const lastName = person.lastName;

// const dacha = {
//     name: {
//         first: 'PC',
//         last: 'notebook'
//     }
// }
//
// const {name: {first}, name: {last} } = dacha
//
// console.log(dacha)

// const person = {
//     name: {
//         first: 'Bob',
//         last: 'Bohdan',
//         role: 'admin'
//     }
// }
//
// const {promisions: {role = 'user'} = {} } = person
//
// console.log(person)
//
//
// function connect(options) {
//
// }

// const fib = [1,1,2,3,5,8,13];
//
// const [,,,,,,d] = fib;
//
// console.log(d)

// const f = [[2,22], [3,33]];
//
// const [[as,aw],[xc,xa]] = f;
// console.log(as,aw,xc,xa)

// const filkins = [1,2,3,3,4,2];
//
// const [a,b,c,d,,,x = 22] = filkins
//
// console.log(x)

// const f = {
//     fil: 'hi',
//     vik: 'hello',
//     mom: 'hola',
//     babs: 'hi'
// }
//
// const s = Object.entries(f).filter(arr=> arr[0] === 'hi');
//
// console.log(s)

// const animal = {
//     say: function () {
//         console.log(this.name, 'goes', this.voice)
//     }
// }
//
// const fil = Object.create(animal);
// fil.name = 'Hi'
// fil.voice = 22
//
// fil.say()

// const animal = {
//         say: function () {
//             console.log(this.name, 'ggogo', this.voice)
//         }
//     }
// ;
//
// function createAnimal(name, voice) {
//     const result = Object.create(animal)
//     result.name = name;
//     result.voice = voice;
//     return result;
// }
//
// const dog = createAnimal('Fil', 'hello')
// const cat = createAnimal('Vil', 'Hi')
//
// dog.say();
// cat.say();


const dacha = {
    say: function () {
        console.log(this.name, 'under',this.voice)
    }
}

function createPeople (name,voice) {
    const result = Object.create(dacha);
    result.name = name;
    result.voice = voice;
    return result;
}

const andrew = createPeople('Andrew','Filipov');
const egor =  createPeople('Egor','Andreew');

andrew.say();
egor.say();

console.log(dacha)


















