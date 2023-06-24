import { Link } from "react-router-dom";
import { useState } from "react";

export function MainIndividual({
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    comments,
    isBookmarked,
    createdAt,
}) { 
    
    const { bookmarkHandler } = useLogic();
  const [bookmark, setBookmark] = useState(false);

    return(
        <>
        <Link to="/"> Home </Link>
        Post
        </>
    ); 
}