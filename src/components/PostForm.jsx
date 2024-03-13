import React from 'react';
import { useState } from 'react';

const PostForm = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [submittedData, setSubmittedData] = useState(null);



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
      .then((response) => response.json())
      .then((data) => console.log(data));
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
      </form>
    </>
  );
};

export default PostForm;
