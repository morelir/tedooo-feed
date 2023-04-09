import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import FeedList from "../components/FeedList";
import { createApiClient } from "../../core/api";
import { Feed as FeedProps } from "../../core/types";

const api = createApiClient();

const Feed = () => {
  const [feedList, setFeedList] = useState<FeedProps[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const result = await api.getFeeds();
      setHasMore(result.hasMore);
      setFeedList(result.data);
    })();
  }, []);

  const loadMoreFeedsHandler = async () => {
    const result = await api.getFeeds(feedList.length);
    setHasMore(result.hasMore);
    setFeedList([...feedList, ...result.data]);
  };

  if (feedList.length === 0) {
    return (
      <div>
        <h1>No feeds found</h1>
      </div>
    );
  }

  return (
    <InfiniteScroll
      element="section"
      loadMore={loadMoreFeedsHandler}
      hasMore={hasMore}
    >
      <FeedList feedList={feedList} />
    </InfiniteScroll>
  );
};

export default Feed;
