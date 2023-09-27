// Mission 1. 매개변수 두 개 마련하고, 덧셈한 값을 숫자로 리턴하는 함수 zero()를 만들기
// 	1-1. 선언을 다 한 다음, 호출해서 처리하는 함수 one() 만들기
// 	1-2. 선언만 간단히 한 다음, 호출할 때, 결정하는 함수 two() 만들기
// 1.
function zero(one, two, callback) {
  return callback(one, two);
}
// 1-1.
function one(a, b) {
  return a + b;
}
// 1-2.
function two(a, b) {
  return a - b;
}
// 1-3.
function three(a, b) {
  return a * b;
}
// 1-4.
function four(a, b) {
  return a / b;
}
console.log(zero(1, 2, one)); // function one()을 호출하면 덧셈식이 됨
console.log(zero(1, 2, two)); // function two()을 호출하면 뺄셈식이 됨
console.log(zero(300, 100, three)); // function three()를 호출하면 곱셈식이 됨
console.log(zero(300, 100, four)); // function four()를 호출하면 나눗셈식이 됨

console.clear(); // 콘솔 지우기

// 2. 함수도 넣을 수 있는지 확인
console.log(
  zero(100, 200, function (one, two) {
    return one + two;
  })
);
