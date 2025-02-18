import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

const MyProvider = ({ children }) => {
  // Define your state values
  const [value, setValue] = useState('');
  const [signin, setSignin] = useState(false);

  return (
    <MyContext.Provider value={{ signin, setSignin, value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
