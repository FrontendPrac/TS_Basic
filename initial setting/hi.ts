// tsconfig.json
// target : 자바스크립트 문법 버전 설정하는 곳
// module : import, require 문법 버전 설정하는 곳

import { helloFunc } from "./hello";

const str = "TS";

const hi = () => {
  console.log(`Hello ${str}!`);
};

helloFunc();
