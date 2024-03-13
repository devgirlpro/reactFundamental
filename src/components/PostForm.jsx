import React from 'react';
import { useState } from 'react';

const PostForm = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [submittedData, setSubmittedData] = useState([]);

  const submitHandler = async (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`ERROR submitting data: ${response.statusText} `);
        }
        return response.json();
      })
      .then((data) => {
        //setSubmittedData(data);
        const newSubmittedData = {
          // Create new object for current submission
          userId: data.userId,
          title: data.title,
          body: data.body,
        };

        const updatedSumbittedData = [...submittedData, newSubmittedData]; // Append to array

        setSubmittedData(updatedSumbittedData); // Update state with all submissions

        console.log('Data submitted successfully:', updatedSumbittedData);

        // Clear form fields after successful submission
        setUserId('');
        setTitle('');
        setBody('');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            placeholder="User ID"
            id="userId"
            name="userId"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            placeholder="Body"
            id="body"
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
      <br />
      <br />
     
      {submittedData.map((submission,index) => (
        <div key={index}>
          <h2>Submitted Post:</h2>
          <p>User ID: {submission.userId}</p>
          <p>Title: {submission.title}</p>
          <p>Body: {submission.body}</p>
        </div>
      ))}
       <br /><br /><br /><br /><br />
    </>
  );
};

export default PostForm;
