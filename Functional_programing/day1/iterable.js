//사용자 정의 이터러블
const log = console.log;

const iterable = { // 사용자 정의 이터러블
  [Symbol.iterator]() { // 이터러블이기때문에 [Symbol.iterator]()를 갖고 이터레이터를 반환해야한다
    let i = 3;
    return {
      next() { // 이터레이터는 { value, done } 를 반환하고 next() 메서드를 갖고있어야한다.
        return i === 0 ? {done: true} :{ value: i--, done: false };
      }
    };
  }
};

const iterator = iterable[Symbol.iterator](); 
log(iterator.next()); // 3, done: false
log(iterator.next()); // 2, done: false
log(iterator.next()); // 1, done: false
log(iterator.next()); // 0, done: true

for(const a of iterable) log(a); // 사용자 정의 이터러블도 [Symbol.iterator]()를 갖고있기때문에 for...of 순회를 할 수 있다.