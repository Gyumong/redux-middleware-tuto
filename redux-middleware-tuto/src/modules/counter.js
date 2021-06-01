/** @format */

// 액션 타입선언

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성함수

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// thunk 함수

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
// 초기 상태선언

const initialState = 0; //초기 상태가 꼭 객체거나 배열일 필요는 없다. 문자나 숫자도 가능

// 리듀서 작성

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
