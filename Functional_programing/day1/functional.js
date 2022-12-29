// #일급 함수
//  - 함수가 값으로 다룰 수 있다.

// #고차 함수
//  - 함수를 값으로 사용 한 함수

// ## 함수를 인자로 받아서 사용한 함수
const log = console.log;

const apply1 = f => f(1);
const add2 = a => a + 2;
log(apply1(add2)); // => 3

// apply1(add2) {
// apply1 의 인자 f(함수)가 a + 2 를 반환하는 add2로 전달됐다.
// add2(1)이 apply1에서 평가되어 3을 반환한다.
// }


const times = (f, n) => {
  let i = -1;
  while(++i < n) f(i);
};

console.log(times(log, 3)); // 0 1 2
console.log(times(a => log(a + 10), 3)); // 10 11 12

// times (log, 3){
//   i가 0부터 2까지 순회하는동안 while의 조건문이 true이므로 인자로 받은 log 함수로 0~2까지 순회값을 출력함
// }
// times (a => log(a + 10), 3){
//   i가 10부터 12까지 순회하는동안 while의 조건문이 true이므로 인자로 받은 함수의 a인자 자리에 i가 들어가면서 10~12 를 출력함
// }


const addMaker = a => b => a + b;

// function addMaker(a) {
//   return {
//     function(b) {
//       return a + b;
//     }
//   }
// }
//의 형태로 클로저를 반환하는 함수다

const add10 = addMaker(10); // b => a + b;
console.log(add10(5));
console.log(add10(10));