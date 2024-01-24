import React from 'react';

function App() {
   const programmers = ['Reed', 'John', 'Jane'];
   
   return (
      <ul>
         {/* Returns 'Reed' */}
         {programmers
            .filter(programmer => !programmer.startsWith('J'))
            .map(programmer => (
               <li>{programmer}</li>
            ))}
      </ul>
   );
}

export default App;
