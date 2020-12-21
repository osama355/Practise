import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("angular");

  const handleName = (e) => {
    setUsername(e.target.value);
  };

  const handleComment = (e) => {
    setComments(e.target.value);
  };
  const handleTopic = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`${username} ${comments} ${topic}`);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input value={username} onChange={handleName} />
        <label>Comments</label>
        <input value={comments} onChange={handleComment} />
        <label>Topic</label>
        <select value={topic} onChange={handleTopic}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
          <option value="next">Next</option>
          <option value="node">Node</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
