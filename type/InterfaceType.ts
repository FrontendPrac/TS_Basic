// interfacr alias(인터페이스 별칭) : 타입과 유사하다. 타입과 차이점은 확장이 가능하다는 점이다.
// 다양한 것들의 정의하기 위해서 사용한다.

// 기본 정의
interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "ts", age: 20 };
// const person2: Person = { name: "ts" };  // Property is missing in type '{ name: string }' but required in type 'Person'.
// const person3: Person = { name: "js", age: "10" };  // Type 'string' is not assignable to type 'number'.

// 선택 속성
interface Person2 {
  name: string;
  age?: number;
}

const person4: Person = { name: "ts", age: 20 };
const person5: Person2 = { name: "js" };
// const person6: Person = { name: "js", age: "10" };  // Type 'string' is not assignable to type 'number'.

// read only 속성 : interface를 생성할 때만 값을 할당할 수 있고, 이후에는 개체를 생성할 수 없다.
interface Person3 {
  readonly name: string;
  readonly age?: number;
}

const person6: Person3 = { name: "ts", age: 20 };
// person6.age = 30;  // cannot assign to 'age' because it is a read-only property.

// read only 배열
let readOnlyArr: ReadonlyArray<number> = [1, 2, 3];
// readOnlyArr.push(4)  // property 'push' does not exist on type 'readonly number[]'.
// readOnlyArr[0] = 100  // index signature in type 'readonly number[]' only permits reading.

// index type : interface에서 속성의 이름을 구체적으로 정의하지 않고 속성의 타입만 정의하는 경우
interface Person4 {
  readonly name: string;
  [key: string]: string | number;
  // key에는 string, number만 들어올 수 있다.
}

const person7: Person4 = { name: "ts", age: 20, birthDay: "언제지" }; // age와 birthday을 속성으로 정의하지 않았음에도 사용 가능하다

// function type
interface Print {
  (name: string, age: number): string;
}
// type Pring = (name: string, age: number) => string {} 과 동일하다

const getNameAndAge: Print = (name, age) => {
  return `name: ${name}, age: ${age}`;
};

console.log(getNameAndAge("kidongg", 20)); // name: kidongg, age: 20

// 인터페이스는 확장이 가능하다 : extend
interface Person8 {
  name: string;
  age: number;
}

interface Korean extends Person8 {
  birth: "KOR";
}

// interfacr Korean {
//   name: string;
//   age: number;
//   birth: "KOR";
// }

// 여러개 인터페이스 확장도 가능하다
interface Developer {
  job: "developer";
}

interface KorAndDev extends Korean, Developer {}

// interface KorAndDev {
//   name: string;
//   age: number;
//   birth: "KOR";
//   job: "developer";
// }
