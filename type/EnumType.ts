// enum : enumeration
// 특정 값들을 열거하는 방식
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3

// enum은 할당이 가능하다
const up: Direction = Direction.Left;
const leftOrRight: Direction.Left | Direction.Right = Direction.Left;

// enum의 값에 어떤 멤버가 매칭이 됐는지 확인할 수 있다.
console.log(Direction[2]); // Left

// enum의 초기값 설정이 가능하다
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction2.Up); // 1
console.log(Direction2.Down); // 2
console.log(Direction2.Left); // 3
console.log(Direction2.Right); // 4

// 문자형 enum
// enum 값 전부를 특정 문자값으로 초기화 해주어야한다.
enum Direction3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// 복합형 enum : 권고하지 않는다. 유지보수하기 어렵다.
enum Direction4 {
  No = 0,
  Yes = "YES",
}

// 특정 값만 입력하도록 강제 하고 싶을 때, 그 값들이 공통점이 있을때 사용한다.
enum Os {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

let myOs: Os;

myOs = Os.Window