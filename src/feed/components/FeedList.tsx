import { Feed } from "../../core/types";
import FeedItem from "./FeedItem";
import "./FeedList.css";

const FeedList = ({ feedList }: { feedList: Feed[] }) => {
  return (
    <ul className="feed-list">
      {feedList.map((feed) => {
        return <FeedItem key={feed.id} feed={feed} />;
      })}
    </ul>
  );
};

export default FeedList;
