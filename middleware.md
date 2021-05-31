<!-- @format -->

# middleware 장점

> 미들웨어를 사용해서 액션이 리듀서한테 전달되기전에 특정 코드 실행가능

<ul>
<p>ex) 액션 처리하는 과정에서 액션을 콘솔에 출력</p>
<p>액션이 리듀서에 전달 직전에 액셩 수정가능 (payload 값을 바꾸는등)</p>
<p>액션이 디스패치 됐을 때 또 다른 액션을 만들어서 새로 디스패치 가능</p>
<p>액션 디스패치 되는과정에서 특정 조건에 따라 라우터에서 다른 곳으로 이동하게 한다든지</p>
<p>액션에 기반해서 비동기 작업 가능(액션 디스패치되면 이에따라 API 호출되고 성공적으로 끝나면 새로운 액션 디스패치 하게끔)</p>
</ul>

미들웨어 동작 방식

next는 미들웨어에서 액션을 받아왔을때 다음 미들웨어에 전달하는 함수다.
다음 미들웨어가 없다면 next를 통해 리듀서한테 액션을 전달.
미들웨어 내부에서 store 사용가능 store.dispatch시 처음 상태로 다시 전달

```JavaScript
const middleware = store =>next =>action =>{
// 하고 싶은 작업...
}
```

## redux-thunk

<p>액션이 객체가 아닌 함수타입이라면 해당 액션 함수를 호출하게끔 만들어 줄 수 있음</p>

```JavaScript
const thunk = store =>next=>action=>
    typeof action === 'function'
    ? action(store.dispatch,store.getState)
    : next(action)
```

<p>dispatch랑 getState를 파라미터로 받아오고 해당함수내부에서 다른 액션을 디스패치하는 함</p>

```JavaScript
const myThunk = () => (dispatch,getState) =>{
    dispatch({type:'HELLO'});
    dispatch({type:'BYE'});
}

dispatch(myThunk())
```

> 비동기 작업 쓸 때 사용

## redux-saga
