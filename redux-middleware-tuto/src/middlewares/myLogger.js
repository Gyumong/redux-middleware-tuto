/** @format */

const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log("\tPrev", store.getState());
  const result = next(action); // 액션을 다음 미들웨어에 전달, 미들웨어가 없다면 리듀서에 전달
  console.log("\tNext", store.getState()); // 액션이 리듀서에서 처리가 모두 된 다음에 그 다음 상태를 가져와서 콘솔에 출력해준다는 뜻
  return result; // 반환하는 result는 dispatch 됐을때 반환 값
};

export default myLogger;
