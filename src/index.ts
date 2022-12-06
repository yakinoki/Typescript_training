import { Hello } from './functions'

const t = true;

console.log(t);
console.log(t && t);

const user = {
    name: "John",
    age: 30,
    isteen() {
        return this.age >=13 && this.age <=19;
    }
};

user.name = "Adam";
console.log(user.name);
console.log(user.isteen());
user.age = 15
console.log(user.isteen());


console.log(Hello('Paul'))


type SupportVersions = {
    [env: number]: boolean;
}

let versions: SupportVersions = {
    102: true,
    200: false,
}

let result = "";
while (result.length < 20) {
    result += "Hello";
}

console.log(result); 

enum Suit {
    Spade,
    Heart,
    Club,
    Diamond
}

console.log(Suit[0]);


  