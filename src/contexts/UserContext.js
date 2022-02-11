import React, { useState } from 'react';

const UserContext = React.createContext([false, () => {}]);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };