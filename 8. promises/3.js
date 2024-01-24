import React from 'react';

const App = () => {
   const [avatar, setAvatar] = React.useState('');

   React.useEffect(() => {
      async function fetchAvatar() {
         /* Using an invalid user to create a 404 (not found) error */
         const response = await fetch('https://api.github.com/users/reedbarge');

         if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            /* In development, you'll see this error message displayed on your screen */
            throw new Error(message);
         }

         const data = await response.json();

         setAvatar(data.avatar_url);
      }

      fetchAvatar();
   }, []);

   return <img src={avatar} alt="Reed Barger" />;
};

export default App;
