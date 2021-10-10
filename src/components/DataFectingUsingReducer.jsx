import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  postData: [],
  loading: true,
  error: ""
};

const postReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        postData: payload
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        postData: [],
        error: payload
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
            type: "FETCH_SUCCESS",
            payload: response
          });
        }, 5000);
      })
      .catch((e) => {
        dispatch({
          type: "FETCH_ERROR",
          payload: "something went wrong"
        });
      });
  }, []);

  return (
    <div>
      {state.loading && state.postData.length === 0
        ? "loading data....."
        : state.postData.length
        ? JSON.stringify(state.postData)
        : null}
      {state.error ? state.error : null}
    </div>
  );
};

export default DaraFetchingOne;
