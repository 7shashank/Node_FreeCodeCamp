persons = [
    {
        name : 'Andrew',
        age : 18,
        position : 'CEO'
    },
    {
        name : 'Elon',
        age : 39,
        position : 'Janitor'
    },
    {
        name : 'Aditya',
        age : 25,
        position : 'Senior Dev'
    }
];
const [Andrew, Elon] = persons;
Aditya = persons[2];
// console.log(Aditya);
// console.log(persons[2]);
module.exports.andrew = Andrew;
module.exports.elon = Elon;
// module.exports.aditya = Aditya;
// console.log(module);