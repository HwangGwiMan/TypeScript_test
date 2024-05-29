// enum 타입, 열거형

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

const user1 = {
    name: "황귀만",
    role: Role.ADMIN
};
const user2 = {
    name: "홍길동",
    role: Role.USER
};
const user3 = {
    name: "아무개",
    role: Role.GUEST
};

console.log(user1, user2, user3);

enum StringEnum {
    str1 = "ko",
    str2 = "us"
}