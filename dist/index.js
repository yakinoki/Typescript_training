import { Hello } from './functions';
const t = true;
console.log(t);
console.log(t && t);
const user = {
    name: "John",
    age: 30,
    isteen() {
        return this.age >= 13 && this.age <= 19;
    }
};
user.name = "Adam";
console.log(user.name);
console.log(user.isteen());
user.age = 15;
console.log(user.isteen());
console.log(Hello('Paul'));
let versions = {
    102: true,
    200: false,
};