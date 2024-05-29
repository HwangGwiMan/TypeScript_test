// 타입 추론
// 추론할 정보가 있으면 자동 추론, 없으면 안됨

let a = 10;

let b = "hello";

let c = {
    id:1,
    name:"",
    profile: {
        nickname:""
    },
    type: true
}

let { id, name, profile} = c;

function func(message = "hello") {
    return "hello";
}

// any 타입의 진화
let d;
d = 10;
d = "str";
d = true;

const num = 10;
const str = "string";

let arr = [1, "string"];

