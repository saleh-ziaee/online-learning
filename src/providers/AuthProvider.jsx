import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { apiClient } from "@/api/request.js";
import { apiGetCurrentUSer } from "@/api/user.js";
import { useRouter } from "next/router";

const authContext = createContext({});

const useAuthContext = () => {
  return useContext(authContext);
};
const AuthProvider = ({ children, isProtectedPage }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(null);
  const [baseUrl, setBaseUrl] = useState("http://demo2578450.mockable.io/");
  const [currentUser, setCurrentUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const isLoggedIn = !!accessToken;

  const saveAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const fetchCurrentUser = async () => {
    try {
      if (isLoading) return;
      setLoading(true);
      const result = await apiGetCurrentUSer();
      // const result1 =await apiClient.get("/auth/me",{
      //     headers: {
      //         Authorization: `Bearer ${accessToken}`,
      //     },
      // })
      // const result2 = await axios.get(`${baseUrl}/auth/me`, {
      //     headers: {
      //         Authorization: `Bearer ${accessToken}`,
      //     },
      // });
      console.log(result);

      setCurrentUser(result);
      setLoading(false);
    }
    catch (err) {
      console.log(err)
    }

  };

  useEffect(() => {
    const _accessToken = localStorage.getItem("accessToken");

    if (_accessToken) {
      setAccessToken(_accessToken);
    } else if (isProtectedPage) {
      router.push("/Login");
    }
  }, [isProtectedPage, router]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchCurrentUser();
    }
  }, [isLoggedIn]);

  const values = {
    logout,
    isLoggedIn,
    currentUser,
    saveAccessToken,
    baseUrl,
    isLoading,
  };

  return (
    <authContext.Provider value={values}>
      {isProtectedPage && !isLoggedIn ? "redirecting to login page" : children}
    </authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, useAuthContext };
