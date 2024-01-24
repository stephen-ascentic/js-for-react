import React from 'react';

function App() {
   const isLoggedIn = true;
   
   if (isLoggedIn) {
     // Shows: Welcome back!
     return <div>Welcome back!</div>;
   }

   return <div>Who are you?</div>;
}

export default App;
