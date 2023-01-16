// 두 개 이상의 타입을 지정할 때 사용한다.
const printOut = (input: number | string) => {
  console.log(input);
};

printOut(1); // 1
printOut("1"); // 1
// printOut(true)  // argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// 유니온 타입의 장점 : 타입에 따라 분기 처리한 코드를 작성할 수 있다.
function getAge(age: any) {
  age.toFixed();
  return age;
}

console.log(getAge(20)); // 20
// console.log(getAge("20")); // TypeError: age.toFixed is not a function

function getAge2(age: number | string) {
  if (typeof age === "number") {
    age.toFixed();
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
}

console.log(getAge2(20)); // 20
console.log(getAge2("20")); // 20

// 유니온 타입의 장점 : 런타임 에러 코드를 작성할 수 있다.
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("Hello world", 4)); //      Hello world
console.log(padLeft("Hello world", "!!!")); // !!!Hello world
// console.log(padLeft("Hello world", true)); // Error: Expected string or number, got 'true'.

// type alias (타입 별칭) : 타입을 재사용 할 수 있다.
type Hero = {
  name: string;
  power: number;
  height: number;
};

const hero: Hero = {
  name: "슈퍼맨",
  power: 1000,
  height: 190,
};

const printHero = (hero: Hero) => {
  console.log(hero.name, hero.power);
};

printHero(hero); // 슈퍼맨 1000
