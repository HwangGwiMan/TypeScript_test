// 타입 별칭

type User = {
    id: number,
    name: string,
    prop1 : string,
    prop2 : string,
    prop3 : string,
    prop4 : string
}

let user1: User= {
    id : 1,
    name : "황귀만",
    prop1 : "test1",
    prop2 : "test2",
    prop3 : "test3",
    prop4 : "test4",
}

let user2: User= {
    id : 2,
    name : "황귀만",
    prop1 : "test1",
    prop2 : "test2",
    prop3 : "test3",
    prop4 : "test4",
}

// 인덱스 시그니처

type CountryCodes = {
    [key : string] : string
};

let countryCodes:CountryCodes = {
    korea: "ko",
    UnitedState: "us",
    UnitedKingdom : "uk"
};

type CountryNumberCodes = {
    [key : string] : number;
    Korea:number;
    //Korea:string; 인덱스 시그니처에선 밸류 타입이 동일해야함
};

let countryNumberCodes = {
    Korea : 410,

}