import { useEffect, useState } from "react";
import { Feed } from "../../core/types";
import Frame from "./Frame";
import Publisher from "./Publisher";
import "./FeedItem.css";
import LikesAndComments from "./LikesAndComments";
import Actions from "./Actions";
import { createApiClient } from "../../core/api";
import { useInView } from "react-intersection-observer";

const api = createApiClient();

const FeedItem = ({ feed }: { feed: Feed }) => {
  const [likes, setLikes] = useState(feed.likes);
  const { ref: feedRef, inView: feedIsVisible } = useInView();

  useEffect(() => {
    if (feedIsVisible) api.sendImpression(feed.id);
  }, [feedIsVisible, feed.id]);

  const likeHandler = (like: boolean) => {
    if (like) setLikes(likes + 1);
    else setLikes(likes - 1);
  };

  return (
    <li ref={feedRef} className="feed-box">
      <Publisher
        src={feed.avatar}
        username={feed.username}
        shopName={feed.shopName}
        className="feed-container"
      />
      <p className="feed-container feed-text ">{feed.text}</p>
      <Frame images={feed.images} alt={feed.shopName} />
      <LikesAndComments
        likes={likes}
        comments={feed.comments}
        className="feed-container"
      />
      <hr className="feed-container" />
      <Actions onLike={likeHandler} />
    </li>
  );
};

export default FeedItem;
