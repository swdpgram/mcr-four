import { useLogic } from "./logic-context";
import { useState } from "react";

export function PostCard({
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
  //   // const timestamp = "2023-06-24T12:01:00Z";
  // const indexOf01 = timestamp.indexOf("01");
  // const result = timestamp.slice(indexOf01, indexOf01 + 2);

  const regex = /(\d{2}):(\d{2})/;
  const match = regex.exec(createdAt);
  let result;

  if (match) {
    result = match[2];
  }

  return (
    <>
      <div className="postcard-box">
        <div className="votes-box">
          <div className="inverted-triangle"> </div>
          <p>
            {upvotes > downvotes ? upvotes - downvotes : downvotes - upvotes}{" "}
          </p>
        </div>

        <div className="context-box">

         <div className="content-details"> 
         <div className="profile-circle"> </div>
          <p>
            Posted by <span className="username-color"> 
              @{username}
            </span> . {result}min
          </p>
         </div>
         
         
          <div className="post-body"> 
          <h2> {post}</h2>
          <p>
    
            {tags.map((tagitem, index) => {
              return (
                <span key={index} className="tags">
                  {tagitem}
                </span>
              );
            })}
          </p>
          <p> {postDescription} </p>

          
          
          </div>
          

          
          <hr />

          <div className="icons-post">
            <i className="bi bi-chat-left"></i>
            <i className="bi bi-share"></i>

            {bookmark === true ? (
              <i
                className="bi bi-bookmark-fill"
                onClick={() => setBookmark(false)}
              ></i>
            ) : (
              <i
                className="bi bi-bookmark"
                onClick={() => setBookmark(true)}
              ></i>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
