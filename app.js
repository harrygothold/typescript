// Not ideal. Better to do const person = {name: 'Harry', age: 30}
// const person: {name: string; age: number} = {
//     name: 'Harry',
//     age: 20,
// };
// const person: {name: string; age: number; hobbies: string[]; role: [number, string]} = {
//   name: "Harry",
//   age: 20,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Harry",
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
