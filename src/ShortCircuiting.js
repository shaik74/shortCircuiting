import React, { useState } from 'react';

const ShortCircuiting = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState('');
  return (
    <>
      <h1>{text || 'Shaikshavali'}</h1>
      <h2>{isError && 'Shaik'}</h2>
      <button onClick={() => setIsError(!isError)}>Toggle</button>
      {isError && <h1>Error.. </h1>}
      {isError ? <h1>There is no error</h1> : <h1>There is a Error</h1>}
    </>
  );
};
export default ShortCircuiting;

// ShortCircuiting :In JavaScript, short-circuiting is the evaluation of an expression from left to right with || and && operators.
//If the condition is met and the rest of the conditions won’t affect the already evaluated result, the expression will short-circuit and return that result (value).
