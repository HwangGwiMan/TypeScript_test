// 타입 좁히기

type Person = {
    name : string,
    age: number
}

// value => number : toFixed
// value => string : toUpperCase
function  func(value : number | string | Date | null | Person) {
    if(typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) { // 왼쪽에 있는 데이터가 오른쪽 객체인지 확인 (내장 객체만 가능)
        console.log(value.getTime());
    } //else if (value instanceof Person) {
    //    console.log(value);
    //}
    else if(value && "age" in value) {
        console.log(value.name);
    }
}

