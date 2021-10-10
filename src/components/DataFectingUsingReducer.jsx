import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  postData: [],
  loading: true,
  error: ""
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "loaded":
      return {
        ...state,
        loading: false,
        postData: action.payload
      };
    case "error":
      return {
        ...state,
        loading: false,
        postData: [],
        error: action.payload
      };
    default:
      return state;
  }
};

const DaraFetchingOne = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTimeout(() => {
          dispatch({
            type: "loaded",
            payload: response
          });
        }, 5000);
      })
      .catch((e) => {
        dispatch({
          type: "error",
          payload: "something went wrong"
        });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading data....." : JSON.stringify(state.postData)}
      {state.error ? state.error : null}
    </div>
  );
};

export default DaraFetchingOne;
