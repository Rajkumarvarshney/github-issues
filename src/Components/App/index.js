import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "../Navbar";
import Button from "../Button";
import Card from "../Card";
import Paragraph from "../Paragraph";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [lastElement, setLastElement] = useState();
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
    axios
      .get(
        `https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=${size}`
      )
      .then((res) => {
        console.log(res);
        setPosts([...posts, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, size]);

  return (
    <div className="ll">
      <Navbar />
      {posts.map((po, index) => {
        if (index < posts.length - 1) {
          return (
            <div className="container">
              <div className="main">
                <div
                  className="rr"
                  style={{
                    border: "solid",
                    borderColor: "darkgreen",
                    borderRadius: 10,
                    marginRight: 10,
                    marginLeft: 5,
                    height: 5,
                    width: 5,
                  }}
                ></div>
                <div className="card">
                  <Card content={po.title} />;
                </div>
                {po.labels?.map((label) => (
                  <Button colorr={label.color} content={label.name} />
                ))}
              </div>
              <div className="ec">
                <Paragraph content="#24446 opened 9 hours ago by richkanlonii" />
              </div>
            </div>
          );
        }
        return (
          <div className="container" ref={setLastElement}>
            <div className="main">
              <div
                className="rr"
                style={{
                  border: "solid",
                  borderColor: "darkgreen",
                  borderRadius: 10,
                  marginRight: 10,
                  marginLeft: 5,
                  height: 5,
                  width: 5,
                }}
              ></div>
              <div className="card">
                <Card content={po.title} />;
              </div>
              {po.labels?.map((label) => (
                <Button colorr={label.color} content={label.name} />
              ))}
            </div>
            <div className="ec">
              <Paragraph content="#24446 opened 9 hours ago by richkanlonii" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
