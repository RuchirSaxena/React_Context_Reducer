import { useState, useEffect } from "react";
import axios from "axios";

const DaraFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
          setPosts(response);
          setError("");
        }, 5000);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  }, []);

  return (
    <div>
      {loading ? "loading data....." : JSON.stringify(posts)}
      {error ? error : null}
    </div>
  );
};

export default DaraFetchingOne;
