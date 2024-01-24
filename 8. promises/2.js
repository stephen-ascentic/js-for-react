import React from 'react';

const App = () => {
   const [avatar, setAvatar] = React.useState('');
   React.useEffect(() => {
      /* 
        Note that because the function passed to useEffect cannot be async, we must create a separate function for our promise to be resolved in (fetchAvatar)
      */
      async function fetchAvatar() {
         const response = await fetch('https://api.github.com/users/reedbarger');
         const data = await response.json();
         setAvatar(data.avatar_url);
      }

      fetchAvatar();
   }, []);
   
   return <img src={avatar} alt="Reed Barger" />;
};

export default App;
