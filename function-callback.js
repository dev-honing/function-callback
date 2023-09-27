Mission 1. 매개변수 두 개 마련하고, 덧셈한 값을 숫자로 리턴하는 함수 zero()를 만들기
	1-1. 선언을 다 한 다음, 호출해서 처리하는 함수 one() 만들기
	1-2. 선언만 간단히 한 다음, 호출할 때, 결정하는 함수 two() 만들기

  function zero(firstNumber, secondNumber){
    if (typeof firstNumber === "number" || secondNumber === "number") {
      return firstNumber + secondNumber ;
    }
  }
