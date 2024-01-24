/* Go to react.new and paste this code in to see it work! */
import React from 'react';

function App() {
   const [isRedColor, setRedColor] = React.useState(false);
   const toggleColor = () => setRedColor(prev => !prev);
   
   return (
      <button
        onClick={toggleColor}
        style={{
          background: isRedColor ? 'red' : 'black',
          color: 'white'
        }}>
        Button is {isRedColor ? 'red' : 'not red'}
      </button>
   );
}

export default App;
