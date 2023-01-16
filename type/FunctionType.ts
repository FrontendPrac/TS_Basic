// void : 해당 함수가 리턴값이 없음을 알려줄 때 사용한다
function print(): void {
  console.log("hello");
}

// print();

// never : 해당 함수가 비정상적으로 실행되거나 끝까지 실행되지 않음을 알려줄때 사용한다
function first_exam(): never {
  while (true) {}
}

function second_exam(): never {
  throw new Error("Error");
}

// 리턴값이 있는 함수
// 일반 함수 : 인자와 리턴값의 데이터 타입 지정
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// 일반 함수 : 인자의 데이터 타입만 지정
function add2(n1: number, n2: number) {
  return n1 + n2;
}

// 화살표 함수 : 인자와 리턴값의 데이터 타입 지정
const add3 = (n1: number, n2: number): number => {
  return n1 + n2;
};

// 화살표 함수 : 인자의 데이터 타입만 지정
const add4 = (n1: number, n2: number) => {
  return n1 + n2;
};

add4(1, 2);
// add4("1", 2);
// add4(10, 20, 30);
// add4(10);

// 리턴값이 없는 함수
function printResult(num: number): void {
  console.log(num);
}

// printResult(2);  // 2

// optional parameter
// 함수를 선언했을 때, 필수적으로 받아오지 않아도 되는 파라미터가 있다면, 
// '?'를 사용하여 옵셔널로 지정할 수 있다.
// 해당 데이터 타입이 아닐 경우 undefinded를 리턴한다.
function add5(n1: number, n2?: number) {
  if (!n2) return n1;
  return n1 + n2;
}

add5(1, 2); // 3
// add5(10, 20, 30); // Expected 1-2 arguments, but got 3.
add5(10); // 10

// default parameter
// 파라미터에 인자를 전달하지 않은 경우에 대해 디폴트 파라미터를 지정할 수 있다.
function add6(n1: number, n2: number = 0) {
  if (!n2) return n1;
  return n1 + n2;
}

add6(1, 2); // 3
// add6(10, 20, 30); // Expected 1-2 arguments, but got 3.
add6(10); // 10

// rest parameter : 나머지 인자는 자동으로 배열로 만들어서 함수를 실행한다.
function add7(n1: number, ...nums: number[]) {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return n1 + totalOfNums;
}

console.log(add7(10, 20, 30, 40));
