import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Text copied to clipboard!');
    } catch (err) {
      setCopySuccess('Failed to copy text.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Copy Text to Clipboard</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here"
        style={{ padding: '8px', width: '200px' }}
      />
      <button onClick={handleCopy} style={{ marginLeft: '10px', padding: '8px 16px' }}>
        Copy
      </button>
      <p>{copySuccess}</p>
    </div>
  );
};

export default App;
