// 변수에 타입을 지정하는 방식이다, 이때 : 을 사용한다.

// string
let str: string = "Typescript";

str = "Javascript";
// str = 3;  // Type 'number' is not assignable to type 'string'.
// str = true;  // // Type 'boolean' is not assignable to type 'string'.

// number
let age: number = 28;

age = 1;
// age = "Javascript";  // Type 'string' is not assignable to type 'number'.
// age = true;  // Type 'boolean' is not assignable to type 'number'.

// boolean
let isTrue: boolean = false;

isTrue = true; 
// isTrue = "Javascript";  // Type 'string' is not assignable to type 'boolean'.
// isTrue = 1;  // Type 'number' is not assignable to type 'boolean'.

// Array
// 1.타입 뒤에 배열을 넣어주는 방식
let arr: string[] = ["kidongg", "messi"];

// arr = [1, 2];
arr = ["1", "2"];

// 2. Array.<타입>를 사용하는 방식(제네릭)
let array: Array<string> = ["kidongg", "messi"];

// array = [1, 2];
array = ["1", "2"];

// Tuple : 필요한 데이터 길이만큼 원하는 데이터 타입을 지정하는 방식
let tuple: [string, number, boolean] = ["1", 1, true];

tuple = ["2", 2, false];
// tuple = ["2", 2];  // Type '[string, number]' is not assignable to type '[string, number, boolean]'. Source has 2 element(s) but target requires 3.
// tuple = [2, "2", true];  // Type 'number' is not assignable to type 'string'.

// any : 데이터 타입에 구애 받고 싶지 않을 때
// any의 잦은 사용은 타입스크립트를 사용 의미를 퇴색시키는 것이기에 최후에 사용하는 것이 좋다.
let data: any = "kidongg";

data = 1;
data = "kijin";
data = true;
data = undefined;

// null, undefined
let null_exam: null = null;
let undefined_exam: undefined = undefined;

let unionType: number | null | undefined = 123;
unionType = 3;
unionType = null;
unionType = undefined;
// unionType = '3';  // Type 'string' is not assignable to type 'number'.
