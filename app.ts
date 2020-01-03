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

enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: "Harry",
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
  };

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby);
}
