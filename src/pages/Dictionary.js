import { useState, useEffect } from 'react';

export default function Dictionary() {
  const [word, setWord] = useState('');

  /* 
    useEffect()'s dependency array decides when to update
    1. With no dependency array, useEffect() update for every state change
    2. With an empty array, useEffect() will only update once at loading
    3. Passing in data, useEffect() will update when those state variables change
  */

  useEffect(() => {
    console.log('State Updated', word);
  });

  return (
    <div className='text-white'>
      <input
        className='text-black'
        type='text'
        onChange={e => setWord(e.target.value)}
      />
      <h3>Let's get the definition for {word}</h3>
    </div>
  );
}
