import React from 'react';

function App() {
   const isLoggedIn = true;
   // If true: nothing, if false: Who are you?
   return <div>{isLoggedIn || 'Who are you?'}</div>;
}

export default App;
