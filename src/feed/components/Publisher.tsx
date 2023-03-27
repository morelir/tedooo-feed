import React from "react";
import "./Publisher.css";

const Publisher = ({
  src,
  username,
  shopName,
  className,
}: {
  src: string;
  username: string;
  shopName: string;
  className: string;
}) => {
  return (
    <div className={`${className} feed-publisher`}>
      <img src={src} alt={`${username} avatar`} />
      <div>
        <p className="feed-username">{username}</p>
        <p className="feed-shopName">
          {shopName}
        </p>
      </div>
    </div>
  );
};

export default Publisher;
