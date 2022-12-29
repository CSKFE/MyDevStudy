const log = console.log;

const arr = [1,2,3];
// for(var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };
// ES5의 순회는 보통 for loop의 length를 통해 순회했다.

// arr의 이터러블을 iter1에 할당한다.
// iter1은 이터레이터로 next() 메서드를 가지고있어 호출한다.
// 이터레이터는 { value, done }을 반환하는데 next()를 호출하여 평가되는 시점에서 arr의 [0]의 값은 next메서드로 인해 { value: 1, done: false}를 반환하고 [1]로 넘어간다.
// for...of 로 iter1의 남은 값을 순회하면 [0]을 제외하고 순회된다.
let iter1 = arr[Symbol.iterator]();
iter1.next();

for(const a of iter1) {
  log(a);
};

for(let j of arr) {
  console.log(j);
};
// ES6에서는 for of loop를 통해 배열을 순회했다.

// Set과 Map 순회

const set = new Set([1,2,3]);
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

for(const a of set) {
  log(a);
}
for(const a of map) {
  log(a);
}

arr[Symbol.iterator] = null; // 을 하게되면 arr의 iterator가 없기에 for of loop를 사용할 수 없다.
set[Symbol.iterator] = null; 
map[Symbol.iterator] = null; // set과 map도 동일하다.

// ## 이터러블/이터레이터
//  - 이터러블은 이터레이터를 반환하는 [Symbol.iterator]()를 가진 값 위의 예제에선 arr, set, map이 해당(JS의 배열,객체,맵,셋 등의 자료구조)
//  - 이터레이터는 { value, done }를 반환하는 iterator.next() 를 가진 값
// 이터러블/이터레이터 프로토콜이란 for...of, 전개연산자 등의 연산자와 함께 동작하도록한 규약


