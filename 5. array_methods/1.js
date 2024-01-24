import React from 'react';

function App() {
   const programmers = ['Reed', 'John', 'Jane'];
   
   return (
      <ul>
         {programmers.map(programmer => (
            <li>{programmer}</li>
         ))}
      </ul>
   );
}

export default App;
