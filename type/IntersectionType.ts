// 여러 인터페이스 타입을 합쳐서 사용할 수 있다.
interface A {
  name: string;
  age: number;
}

interface B {
  name: string;
  skill: string;
}

type DevJob = A & B;

const goodPerson: DevJob = {
  name: "kidongg",
  age: 28,
  skill: "javascript",
};
