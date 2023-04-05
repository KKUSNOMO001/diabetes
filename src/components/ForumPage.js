import React, { useState } from 'react';
import profilePictureUrl from './image2.jpg'

const styles = {
  backgroundColor: '#f2f2f2',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  width: '400px',
  margin: 'auto',
  marginTop: '50px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
};

function ForumPage(props) {
  const [comments, setComments] = useState([]);
  const {senderName} = props;
  function addComment(comment) { 
    setComments(prevComments => [...prevComments, comment]);
  }

  return (
    <div>
      <h1 style={{marginLeft: "2%"}}>Forum Page</h1>
      <div>
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} senderName={senderName}/>
        ))}
      </div>
      <CommentForm addComment={addComment} senderName={senderName}/>
      <div style={{height:"30vh"}}></div>
      
    </div>
  );
}

function CommentForm(props) {
  const [comment, setComment] = useState('');
  const {addComment, senderName} = props;
  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = { comment, senderName, profilePictureUrl };
    addComment(newComment);
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit} style={{...styles, position: "fixed", bottom: "0px", width:"100%"}}>
      <label htmlFor="comment">Add a comment:</label>
      <br />
      <textarea id="comment" name="comment" value={comment} onChange={handleChange}></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

function Comment(props) {
  const {comment, senderName} = props;
  console.log(senderName);
  return (
    <div style={{...styles, width:"90%", marginTop: "30px", marginLeft: "auto", boxShadow:"none"}}>
      <img src={profilePictureUrl} className='nav-photo' alt="Profile" />
      <label style={{marginLeft: "10px"}}>{senderName}</label>
      <p>{comment.comment}</p>
    </div>
  );
}

export default ForumPage;
