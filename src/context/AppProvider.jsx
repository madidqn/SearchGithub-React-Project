import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [searchUser, setSearchUser] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (searchUser === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setData([]);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://api.github.com/search/users?q=${searchUser}`
        );
        setData(result?.data?.items);
        setSearchUser("");
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  }
  function deleteUsers() {
    setData([]);
  }
  return (
    <AppContext.Provider
      value={{
        submit,
        data,
        searchUser,
        setSearchUser,
        isLoading,
        error,
        deleteUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
