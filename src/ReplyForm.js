import { useState } from 'react';
import { db } from './Firebase';



function ReplyForm({ feedback, onClose }) {
  const [reply, setReply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    db.collection('feedback').doc(feedback.id).update({
      reply,
      replied: true,
    });
    
    setReply('');
    onClose();
  };

  return (
    <div>
      <h2>Reply to Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name:</label>
          <div>{feedback.name}</div>
          <label>Customer Feedback:</label>
          <div>{feedback.feedback}</div>
        </div>
        <div>
          <label>Reply:</label>
          <textarea value={reply} onChange={(e) => setReply(e.target.value)} />
        </div>
        <button type="submit">Send Reply</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default ReplyForm;