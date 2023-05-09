import React, { useState } from 'react';
import { db } from './Firebase';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('feedback').add({
      name,
      email,
      phone,
      feedback,
      replied: false,
      timestamp: new Date(),
    });

    setName('');
    setEmail('');
    setPhone('');
    setFeedback('');
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        </div>
        <br></br>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;