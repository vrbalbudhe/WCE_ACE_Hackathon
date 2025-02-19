import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../components/homepage/LoadingScreen";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user info
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/auth/isToken",
        {
          withCredentials: true,
        }
      );

      const userInfo = response?.data?.payload;
      if (userInfo) {
        const response1 = await axios.get(
          `http://localhost:8000/api/user/${userInfo?.email}`
        );
        setCurrentUser(response1?.data?.userInfo || null);
      } else {
        setCurrentUser(null);
      }
    } catch (error) {
      console.error("Error fetching user info, please re-login.", error);
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Function to refresh login state
  const refreshLoginContext = async () => {
    setLoading(true);
    await fetchUser();
  };

  // Run fetchUser once on mount
  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        refreshLoginContext,
        setLoading,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
