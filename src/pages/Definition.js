import { useState, useEffect } from 'react';

export default function Definition() {
  const [word, setWord] = useState();

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
      .then(response => response.json())
      .then(data => setWord(data[0].meanings));
  });

  return (
    <div className='text-white'>
      <h2>Here are the definitions:</h2>

      {word.map(meaning => (
        <p>{meaning.definitions.definition[0]}</p>
      ))}
    </div>
  );
}
