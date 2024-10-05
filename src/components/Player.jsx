import { useState } from "react";

export default function Player() {

  // Using this approach, we use a lot of code, this can be more simple if we use ref!
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setSubmitted(false);
    setUserName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? userName : 'unknown entity'}</h2>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          value={userName}
        />
        <button
          onClick={handleClick}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
