import React from 'react';

function App() {
   const isLoggedIn = true;
   // If true: Welcome back!, if false: nothing
   return <div>{isLoggedIn && 'Welcome back!'}</div>;
}

export default App;
