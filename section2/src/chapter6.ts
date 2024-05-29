// any 특정 변수의 타입이 확실하지 않을 때
// 어떤 타입의 변수도 입력이 가능

let anyVar:any = 10;

anyVar = "str";

anyVar = () => {};

let num:number = 10;

num = anyVar;

// unknown

let unKnow:unknown;

unKnow = "";
unKnow = 1;
unKnow = () => {};

//num = unKnow 언노운 타입은 다른 타입에 넣을 수 없음