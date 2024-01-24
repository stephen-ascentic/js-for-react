import React from 'react';

function App() {
   const isLoggedIn = true;
   // Shows: Welcome back!
   return isLoggedIn ? <div>Welcome back!</div> : <div>Who are you?</div>;
}

export default App;
