// unknown 전체 집합

function unknowExam() {
    // up cast
    let a : unknown = 1;
    let b : unknown = "test";
    let c : unknown = true;
    let d : unknown = null;

    let unknownVar:unknown;

    // error (down cast)
    // let num:number = unknownVar;
    // let str:string = unknownVar;
}

// never 공집합

function neverExam() {
    function neverfunc():never {
        while (true) {}
    }

    // up cast
    let num:number = neverfunc();
    let str:string = neverfunc();

    // error (down cast)
    // let never1:never = 10;
    // let never2:never = "str";
}


// void
function voidExam() {
    function voidFunc():void {
        console.log("test");
    }

    // up cast
    let voidVar : void = undefined;
}

// any
function anyExam() {
    let unknownVar : unknown;
    let anyVar : any;
    let underfunedVar:undefined;

    // down cast
    anyVar = unknownVar;

    // 계층을 뛰어넘은 down cast
    underfunedVar = anyVar;

    let neverVar : never;

    // error (never 타입은 any 타입도 들어갈 수 없음)
    //neverVar = anyVar;
}


