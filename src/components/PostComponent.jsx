
import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';


const PostComponent = () => {
    const [post, setPost] = React.useState("");
    const [posts, setPosts] = React.useState([]);
  
    const handlePostChange = (event) => {
      setPost(event.target.value);
    };
  
    const handlePostSubmit = () => {
      if (post.trim() !== "") {
        setPosts([...posts, { text: post, comments: [] }]);
        setPost("");
      }
    };
  
    const handleCommentSubmit = (postIndex, comment) => {
      const updatedPosts = [...posts];
      updatedPosts[postIndex].comments.push(comment);
      setPosts(updatedPosts);
    };
  
    const handleDeletePost = (postIndex) => {
      const updatedPosts = [...posts];
      updatedPosts.splice(postIndex, 1);
      setPosts(updatedPosts);
    };
  
    const handleDeleteComment = (postIndex, commentIndex) => {
      const updatedPosts = [...posts];
      updatedPosts[postIndex].comments.splice(commentIndex, 1);
      setPosts(updatedPosts);
    };
  
    return (
      <div className="container">
        <div className="post-form">
            <h3>What's on your mind?</h3>
          <input
            type="text"
            className="form-control"
            placeholder="...Enter Text"
            value={post}
            onChange={handlePostChange}
          />
          <button
            className="btn btn-primary"
            onClick={handlePostSubmit}
          >
            Post
          </button>
        </div>
        {posts.map((p, postIndex) => (
          <div key={postIndex} className="post">
            <p><strong>Post:</strong> {p.text}</p>
            <span
              className="post-delete"
              onClick={() => handleDeletePost(postIndex)}
            >
              &#x2716;
            </span>
            <div className="highlighted-area">
              {p.comments.map((comment, commentIndex) => (
                <Comment
                  key={commentIndex}
                  postIndex={postIndex}
                  commentIndex={commentIndex}
                  text={comment}
                  onDelete={handleDeleteComment}
                  onReply={handleCommentSubmit}
                />
              ))}
            </div>
            <CommentForm postIndex={postIndex} onSubmit={handleCommentSubmit} />
          </div>
        ))}
      </div>
    );
  };

  
  export default PostComponent ;
  