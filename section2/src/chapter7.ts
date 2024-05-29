// void

function func1():string {
    return "hello";
}

function func2():void {
    console.log("test");
}

let a:void;

//a = 1;
//a= "str";
//a = null;
// never 불가능 모순

function func3():never {
    while (true) {}
}

let b:never;

// b = 1;
// b = "str"
// b = null