import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { deletePostAction, addPostAction } from "./store/actions/postActions";
import { deleteTodoAction, addTodoAction } from "./store/actions/todoActions";

function App() {
  // console.log(todos);
  // console.log(posts);
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const { posts } = useSelector((state) => state.posts);

  console.log(todos);

  return (
    <div className="App">
      <h2>TODOS</h2>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.todo}{" "}
          <button onClick={() => dispatch(deleteTodoAction(todo.id))}>
            delete
          </button>
        </p>
      ))}
      <button
        onClick={() => {
          // addNewTodo;
          dispatch(addTodoAction());
        }}
      >
        ADD TODO
      </button>
      <h2>POSTS</h2>
      {posts.map((post) => (
        <p key={post.id}>
          {post.post}{" "}
          <button onClick={() => dispatch(deletePostAction(post.id))}>
            delete
          </button>
        </p>
      ))}
      <button
        onClick={() => {
          // addNewPost;
          dispatch(addPostAction());
        }}
      >
        ADD POST
      </button>
    </div>
  );
}

export default App;
