// 제네릭은 타입을 함수의 파라미터처럼 사용하는 것을 의미한다.
// 제네릭은 보통 여러 타입을 넣을 수 있는 공통 함수에서 많이 쓰인다.
function getText(text: any): any {
  return text;
}

// console.log(getText("hi")); // hi
// console.log(getText(10)); // 10
// console.log(getText(true)); // true

// 위의 예시는 입력값의 타입과 리턴값의 타입이 다르게 나타날 가능성이 있다.
// 이 두 가지의 타입을 같게 해주고 싶을때 제네릭을 사용한다.
function getText2<T>(text: T): T {
  return text;
}

// console.log(getText2<string>("hi")); // hi
// console.log(getText2<number>(10)); // 10
// console.log(getText2<boolean>(true)); // true

// 호출 시 제네릭은 생략이 가능하다
console.log(getText2("hi")); // hi
console.log(getText2(10)); // 10
console.log(getText2(true)); // true

// 사용 예시
function getItemArray<T>(arr: T[], index: number): T {
  return arr[index];
}

function pushItemArray<T>(arr: T[], item: T): void {
  arr.push(item);
}

const techStack = ["js", "react"];
const nums = [1, 2, 3, 4];

getItemArray(techStack, 0); // 'js'
pushItemArray<string>(techStack, "ts"); // ['js', 'react', 'ts']

// pushItemArray<number>(techStack, 123); // Error

getItemArray(nums, 0); // 1
pushItemArray(nums, 5); // [1, 2, 3, 4, 5];

// 제네릭 타입 변수
// 배열 형태의 입력값과 리턴값을 나타내고 싶을 때
function printOut2<T>(input: T[]): T[] {
  console.log(input.length);
  return input;
}

// printOut2(3); // argument of type 'number' is not assignable to parameter of type 'unknown[]'
printOut2([1, 2, 3]);

// 제네릭 제약 조건 : 인터페이스 확장 활용
// 배열, 객체 형태의 입력값과 리턴값을 나타내고 싶을 때
interface LengthWise {
  length: number;
}

function printOut3<T extends LengthWise>(input: T): T {
  console.log(input.length);
  return input;
}

// printOut3(3); // argument of type 'number' is not assignable to parameter of type 'LengthWise'
printOut3([1, 2, 3]);
printOut3({ length: 1, value: "good" });
