let a = {
    name: 'Fillipko',
    protocool: "https",
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teather: {
            name: 'wew',
            age:18
        }
    }
}

let b = {...a};

// a.name = 'Blabla';
// a.isOnline = true;
// a.classroom.teather = 'Dmitiy';
// a.students.push('Vasilij')



b.name = '21333'
// console.log (a);
b.students.shift('Vadim')
b.students.unshift('Vlad')
console.log (b);