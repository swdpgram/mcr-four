import { forumData } from "./data";
import { PostCard } from "./Components/PostCard";
import { useLogic } from "./Components/logic-context";

export function MainHome() {
 
    const { forumFeed } = useLogic(); 

  return (
    <>
      <div className="home-container">
        <h1> Latest posts </h1>
        {forumFeed.posts.map((item) => {
          return (
            <div key={item.postId}> 
          <PostCard {...item} />
          </div>
          );
        })}
      </div>
    </>
  );
}
