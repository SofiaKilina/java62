const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    'fullName': function () {
        return `${this.firstName} ${this.lastName}`;
    },
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person);
person.age = 28;
console.log(person.age);
console.log(person.fullName());
console.log(person.fullName);
const peter = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 19,
}
console.log(peter);
// console.log(peter.fullName());
peter.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
console.log(peter.fullName());
console.log(peter.hobby);
peter.hobby = 'coding';
console.log(peter.hobby);
console.log(peter.id);
// peter.id = 1000;
peter['id'] = 1000;
console.log(peter.id);
console.log(peter['id']);
console.log(peter['firstName']);
let key = 'hobby';
console.log(peter.key);
console.log(peter[key]);
console.log(peter);
console.log(peter['fullName']());
const fields = ['firstName', 'lastName'];
showFields(person, fields);
showFields(peter, ['firstName', 'age', 'hobby']);
printObject(person);
printObject(peter);
const mary = new Person(2000, 'Mary', 'Smith', 17);
console.log(mary);
printObject(mary);
const persons = [mary, peter, new Person(3000, 'Karl', 'Bush', 37),
    {
        id: 4000,
        firstName: 'Rabindranat',
        lastName: 'Tagore',
        age: 27,
        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    }];
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].fullName());
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

function printObject(obj) {
    console.log('===== Print Object =====');
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(`${key} -> ${obj[key]()}`);
        } else {
            console.log(`${key} -> ${obj[key]}`);
        }
    }
    console.log('==========');
}

function showFields(person, fields) {
    console.log('===== Show Fields =====');
    for (let i = 0; i < fields.length; i++) {
        console.log(person[fields[i]]);
    }
    console.log('==========');
}