import React from 'react';

const App = () => {
   const [avatar, setAvatar] = React.useState('');
   
   React.useEffect(() => {
      /* 
        The first .then() lets us get JSON data from the response.
        The second .then() gets the url to my avatar and puts it in state. 
      */
      fetch('https://api.github.com/users/reedbarger')
         .then(response => response.json())
         .then(data => setAvatar(data.avatar_url))
         .catch(error => console.error('Error fetching data: ', error));
   }, []);
   return <img src={avatar} alt="Reed Barger" />;
};

export default App;
