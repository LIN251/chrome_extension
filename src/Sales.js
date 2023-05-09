import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import ReplyForm from './ReplyForm';

// show feedback list with timestamps.
function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  useEffect(() => {
    const unsubscribe = db.collection('feedback').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const feedback = doc.data();
        feedback.id = doc.id;
        return feedback;
      });
      setFeedbacks(data);
    });

    return unsubscribe;
  }, []);
    

  const handleReply = (feedback) => {
    setSelectedFeedback(feedback);
    setShowReplyForm(true);
  };

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.timestamp}>
            <div>Name: {feedback.name}</div>
            <div>Email: {feedback.email} <button onClick={() => handleReply(feedback)}>Reply</button></div>
            <div>Phone: {feedback.phone}</div>
            <div>Feedback: {feedback.feedback}</div>
            <div>Timestamp: {feedback.timestamp.toDate().toLocaleString()}</div>
            <table>
            <tbody>
              <tr>
                <td>Replyed:</td>
                <td>{feedback.replied ? 'Yes' : 'No'}</td>
              </tr>
              {feedback.reply && 
              <tr>
                <td>Reply:</td>
                <td>{feedback.reply}</td>
              </tr>
              }
            </tbody>
          </table>
          </li>

        ))}
      </ul>
      {showReplyForm && <ReplyForm feedback={selectedFeedback} onClose={() => setShowReplyForm(false)} />}
    </div>
  );
}


// allow sales to add porducts.
function ProductAddForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [sales, setSales] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('products').add({
      name,
      price: parseInt(price),
      sales: parseInt(sales),
    });

    setName('');
    setPrice('');
    setSales('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Product Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Remaining:</label>
          <input type="number" value={sales} onChange={(e) => setSales(e.target.value)} />
        </div>
        <br></br>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

// manage sales page.
function Manager() {
  return (
    <div>
      <h1>Sales Section</h1>
      <ProductAddForm />
      <FeedbackList />
    </div>
  );
}

export default Manager;