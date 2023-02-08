import { useContext } from "react";
import { FeedContext } from "../Context/FeedContext";

const useFeedContext = () => {
  const { feed, saved, setFeed, setSaved }: any = useContext(FeedContext);
  return { feed, saved, setFeed, setSaved };
};

export default useFeedContext;
