// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    bread: string;
}

let animal: Animal = {
    name: "기린",
    color: "Yellow",
}

let dog:Dog = {
    name:"돌돌이",
    color:"brown",
    bread:"진도"
}
// 속성을 비교하여 더 적은 타입이 상위 계층, 더 많은 타입이 하위 계층
animal = dog;
//dog = animal;

type Book = {
    name: string;
    price:number;
}

type ProgramingBook = {
    name:string;
    price:number;
    skill:string
}

let book:Book;
let programingBook:ProgramingBook = {
    name:"Test",
    price:3000,
    skill:"react"

}
book = programingBook;
//programingBook = book;

// 초과 속성 검사
let book2:Book = {
    name:"Test",
    price:1011,
    //skill:"dd"
}

