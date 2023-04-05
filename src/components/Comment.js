import React from 'react';

function Comment({ comment }) {
  return (
    <div>
      <img src={comment.profilePictureUrl} alt="Profile" />
      <p>{comment.senderName}</p>
      <p>{comment.comment}</p>
    </div>
  );
}

export default Comment;
