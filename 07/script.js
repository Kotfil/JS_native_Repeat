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

a.name = 'Blabla';
a.isOnline = true;
a.classroom.teather = 'Dmitiy';
a.students.push('Vasilij')
console.log (a);