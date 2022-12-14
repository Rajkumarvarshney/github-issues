import React from "react";
import Button from "../Button";

import "./Card.css";

const Card = ({ post }) => {
  return (
    <>
      <div className="card">
        <div className="card_left"></div>
        <div className="card_right">
          <div className="card_right_top">
            <span className="card_right_heading">{post?.title}</span>
            {post?.labels?.map((label) => (
              <Button bColor={label.color} content={label.name} />
            ))}
          </div>
          <div className="card_right_bottom">
            #{post.number} opened 9 hours ago by {post.user.login}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
