/** @format */

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {id, title, body}
const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어 튜토",
    body: "리덕스 떵크 배우는 중 입니다.",
  },
  {
    id: 2,
    title: "몽실이 산책 가야지",
    body: "언제갈지는 미지수 입니다...",
  },
  {
    id: 3,
    title: "담배와 커피",
    body: "몸에는 안좋지만 머리엔 기분이 좋은 느낌?!",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
