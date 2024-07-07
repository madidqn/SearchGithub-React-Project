import axios from "axios";
import { useState } from "react";
import Form from "./components/form/Form";
import Users from "./components/data/Users";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [isValue, setIsValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (searchUser === "") {
      setIsValue(true);
    } else {
      setData([]);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://api.github.com/search/users?q=${searchUser}`
        );
        setData(result?.data?.items);
        setSearchUser("");
        setIsValue(false);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  }

  function deleteUsers() {
    setIsValue(false);
    setData([]);
  }

  return (
    <div className="app">
      <Form
        submit={submit}
        isValue={isValue}
        type={"text"}
        placeholder={"Search Users..."}
        searchUser={searchUser}
        setSearchUser={setSearchUser}
        isLoading={!isLoading}
        typeBtn={"button"}
        deleteUsers={deleteUsers}
        length={data.length}
      />
      <Users isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
