// src/utils/useUser.js
import { useState, useEffect } from 'react';

const useUser = (userID) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data logic
    setUser(fetchedData);
  }, [userID]);

  return user;
};

export default useUser;