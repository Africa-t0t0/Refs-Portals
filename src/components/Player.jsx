import { useState, useRef } from "react";

export default function Player() {

  // now we are using refs.
  const playerName = useRef();


  // Using this approach, we use a lot of code, this can be more simple if we use ref!
  const [userName, setUserName] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  // function handleNameChange(event) {
  //   setSubmitted(false);
  //   setUserName(event.target.value);
  // }

  function handleClick() {
    // setSubmitted(true);
    // you will always need to access the current value!
    // with REF, we are making a connection between the input and the ref, this allows us to access ALL THE VALUES of the dom element,
    // in this case, the input tag.
    setUserName(playerName.current.value);
    // a way of clearing the input is this, but not the best case, we should always avoid manipulating the DOM trough Ref
  }

  return (
    <section id="player">
      {/* <h2>Welcome {userName ? userName : 'unknown entity'}</h2> */}
      {/* another way of writing thar code is */}
      <h2>Welcome {userName ?? 'unknown entity'}</h2>
      <p>
        {/* old version */}
        {/* <input
          ref={playerName}
          type="text"
          onChange={handleNameChange}
          value={userName}
        /> */}
        {/* using Ref */}
        <input
          type="text"
          ref={playerName}
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
