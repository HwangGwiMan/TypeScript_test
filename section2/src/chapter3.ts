// 객체

let user:{
    id?:number, // ? 는 해당 속성이 있을 수도 없을 수도 있다는 의미
    name:string
} = {
    id:1,
    name: "황귀만"
};

let config: {
    readonly apiKey:string; // readonly는 값을 변경할 수 없게 함
} = {
    apiKey: "KEY"
}

