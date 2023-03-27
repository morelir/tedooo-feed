import axios from "axios";
import { Feed } from "./types";

export type FeedsResponseData = {
  hasMore: boolean;
  data: Feed[];
};

export type ApiClient = {
  getFeeds: (skip?: number) => Promise<FeedsResponseData>;
  sendImpression: (id: string) => void;
};

export const createApiClient = (): ApiClient => {
  return {
    getFeeds: (skip: number = 0) => {
      return axios
        .get(`https://dev.tedooo.com/hw/feed.json?skip=${skip}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    sendImpression: (id: string) => {
      axios
        .get(`https://www.tedooo.com/?itemId=${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
  };
};
