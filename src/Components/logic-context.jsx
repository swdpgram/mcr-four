import { useContext, createContext, useState } from "react";
import { forumData } from "../data";

export const LogicContext = createContext();

export function LogicProvider({ children }) {
  const [forumFeed, setForumFeed] = useState(forumData);

  const bookmarkHandler = (id) => {
    const changedFeed = forumData.posts.map((item) =>
      item.postId === id ? { ...item, isBookmarked: !item.isBookmarked } : item
    );
    setForumFeed(changedFeed)
  };

  return (
    <LogicContext.Provider value={{ bookmarkHandler, forumFeed, setForumFeed }}>
      {children}
    </LogicContext.Provider>
  );
}

export const useLogic = () => useContext(LogicContext);
