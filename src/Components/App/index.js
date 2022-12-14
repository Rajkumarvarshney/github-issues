import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "../Navbar";
import Card from "../Card";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const size = 20;
  const [lastElement, setLastElement] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const options = {
    rootMargin: "0px",
    threshold: 1,
  };
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPage((no) => no + 1);
      }
    }, options)
  );
  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=${size}`
      )
      .then((res) => {
        setIsLoading(false);
        setPosts([...posts, ...res.data]);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [page]);

  return (
    <div className="App">
      <div className="content">
        <Navbar />
        {posts.map((post, index) => {
          if (index < posts.length - 1) {
            return <Card post={post} />;
          }
          return (
            <div ref={setLastElement}>
              <Card post={post} />
            </div>
          );
        })}
      </div>
      {isLoading && (
        <div className="mainLoader">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
export default App;
