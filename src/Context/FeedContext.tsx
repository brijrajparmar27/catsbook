import { createContext, ReactNode, useState } from "react";

export const FeedContext = createContext({});

export const FeedProvider = ({ children }: { children: ReactNode }) => {
  const [feed, setFeed] = useState([]);
  const [saved, setSaved] = useState([]);
  return (
    <FeedContext.Provider value={{ feed, saved, setFeed, setSaved }}>
      {children}
    </FeedContext.Provider>
  );
};
