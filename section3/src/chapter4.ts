// 대수타입

// 합집합 타입 (Union)

let a : string | number | boolean;

a = 1;
a = "str";
a = true;

let arr:(number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name : string;
    color : string;
}

type Person = {
    name: string;
    lang : string;
}

type Union1 = Dog | Person;

let union1:Union1 = {
    name: "",
    color: ""
}

let union2:Union1 = {
    name:"",
    lang: ""
}

let union3:Union1 = {
    name:"",
    lang: "",
    color:""
}

// let union4:Union1 = {
//     name:"",
// }

// 교집합 타입 (Intersection)

let variable:number & string;

type Intersection = Dog & Person;


let intersection :Intersection = {
    name:"",
    lang: "",
    color:""
}

// 어느 속성이라도 빠지면 성립하지 않음
// let intersection1 :Intersection = {
//     name:"",
//     color:""
// }