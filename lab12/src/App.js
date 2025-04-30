import React from 'react';
import HelloCGU from './hello_cgu' ;
import MultiButton from './cgu_multiButton';

function App() {
  return (
    <div className="App">
      <HelloCGU />
      {MultiButton()}
    </div>
  );
}

export default App;