
import React from 'react';

const Comment = ({ postIndex, commentIndex, text, onDelete, onReply }) => {
    const [replying, setReplying] = React.useState(false);
    const [replyText, setReplyText] = React.useState("");
  
    const handleDelete = () => {
      onDelete(postIndex, commentIndex);
    };
  
    const handleReply = () => {
      setReplying(true);
    };
  
    const handleReplyChange = (event) => {
      setReplyText(event.target.value);
    };
  
    const handleReplySubmit = () => {
      if (replyText.trim() !== "") {
        onReply(postIndex, replyText);
        setReplyText("");
        setReplying(false);
      }
    };
  
    return (
      <div className="comment">
        <p>{text}</p>
        <div className="comment-actions">
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-primary" onClick={handleReply}>Reply</button>
        </div>
        {replying && (
          <div className="reply-comment mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Write a reply..."
              value={replyText}
              onChange={handleReplyChange}
            />
            <button
              className="btn btn-primary mt-2"
              onClick={handleReplySubmit}
            >
              Reply
            </button>
          </div>
        )}
      </div>
    );
  };


export default Comment;
