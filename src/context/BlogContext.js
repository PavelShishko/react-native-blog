import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const blogReducer = (state, action) => {
  //state === [post, post, post]
  //action === {type: 'addBlogPost'} || {type: 'editBlogPost'} || {type: 'deleteBlogPost'}
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((post) => post.id !== action.payload);
    case "edit_blogpost":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (title, content, id, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: { title, content, id },
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }]
);
