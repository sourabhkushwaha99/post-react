import React from 'react';



const CommentForm = ({ postIndex, onSubmit }) => {
    const [comment, setComment] = React.useState("");
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = () => {
      if (comment.trim() !== "") {
        onSubmit(postIndex, comment);
        setComment("");
      }
    };
  
    return (
      <div className="comment-form">
        <input
          type="text"
          className="form-control"
          placeholder="Write a comment..." 
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleSubmit}
        >
          Comment
        </button>
      </div>
    );
  };
  





  export default CommentForm ;