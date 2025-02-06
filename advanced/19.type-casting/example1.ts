interface User1 {
    name:string;
    age:number;
}

const jsonData = '{ "name":"Alice", "age":30 }';

const user11 = JSON.parse(jsonData) as User1; //type-casting

//console.log(`Name ${user11.name}, Age ${user11.age}, Email ${user11.email}`); //error

console.log(`Name ${user11.name}, Age ${user11.age}`); 