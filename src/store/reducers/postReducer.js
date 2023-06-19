const initState = {
  posts: [{ id: 1, post: "egg hunt with yoshi" }]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.post] };

    case "DELETE_POST":
      let modifiedPost = state.posts.filter((post) => post.id !== action.id);
      return { ...state, posts: modifiedPost };

    default:
      return state;
  }
};

export default postReducer;
