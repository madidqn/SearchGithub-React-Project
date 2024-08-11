import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
// import { useReducer } from "react";

export const AppContext = createContext();
// const initState = {
//   searchUser: "",
//   // data: [],
//   // isLoading: false,
//   // error: false,
// };
// function reducer(prevState, action) {
//   if (action.type === "searchUser") {
//     return { searchUser: "" };
//   }
//   if (action.type === "valueInput") {
//     return { searchUser: action.payload };
//   }
// }
function AppProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initState);
  const [searchUser, setSearchUser] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);

  async function submit(e) {
    e.preventDefault();
    if (searchUser.trim() === "") {
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
        // dispatch({ type: "searchUser" });
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  }
  async function getRepos(login) {
    try {
      const repos = await axios.get(
        `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
      );
      console.log(repos?.data);
      setRepos(repos?.data);
    } catch (e) {
      console.log(e);
    }
  }
  function deleteUsers() {
    setData([]);
  }
  return (
    <>
      <AppContext.Provider
        value={{
          submit,
          getRepos,
          repos,
          data,
          searchUser,
          setSearchUser,
          // dispatch,
          isLoading,
          error,
          deleteUsers,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppProvider;
