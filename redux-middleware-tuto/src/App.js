/** @format */
import { Route } from "react-router-dom";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Route path="/" component={PostList} exact={true} />
      <Route path="/:id" component={Post} />
    </>
  );
}

export default App;
