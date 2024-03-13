import React, { useState } from 'react';

const PostFormDisplay = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'Post',
          body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error submitting data: ${response.statusText}`);
      }

      const submittedData = await response.json(); // Extract submitted data
      setSubmittedData(submittedData); // Update state for display

      console.log('Data submitted successfully:', submittedData);

      // Clear form fields after successful submission
      setUserId('');
      setTitle('');
      setBody('');
    } catch (error) {
      console.log('ERROR submitting Data:', error);
    }
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
        {submittedData && (
          <div>
            <h2>Submitted Post:</h2>
            <p>User Id: {submittedData.userId}</p>
            <p>Title: {submittedData.title}</p>
            <p>body: {submittedData.body}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default PostFormDisplay;
