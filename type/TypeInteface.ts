// 타입을 명시하지 않아도 자동으로 타입을 넣어주는 것을 타입 추론이라고 한다.
// let과 const와 차이가 있다. let은 자율적이며, const는 매우 엄격하다.

let a = 123; // number 타입이다
let b = "abc"; // string 타입이다

a = 456;
// a = "abc";  // Type 'string' is not assignable to type 'number'.
// b = 456;  // Type 'number' is not assignable to type 'string'.

const c1 = 123; // number 123 타입이다
const c2 = "abc"; // string abc 타입이다

// 배열
const arr2 = [1, 2, 3];
const [n1, n2, n3] = arr2;
arr2.push(4);
// arr2.push("a"); // Argument of type 'string' is not assignable to parameter of type 'number'

// 객체
const obj = { numId: 1, stringId: "1" };
const { numId, stringId } = obj;
// console.log(numId === stringId); // This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.

// 함수
const func1 = (a = "a", b = 1) => {
  return `${a} ${b};`;
};
// func1(3, 6);  // Argument of type 'number' is not assignable to parameter of type 'string'.

// const v1: number = func1("a", 1);  // Type 'string' is not assignable to type 'number'.

const func2 = (value: number) => {
  if (value < 10) {
    return value;
  } else {
    return `${value} is big`;
  }
};
