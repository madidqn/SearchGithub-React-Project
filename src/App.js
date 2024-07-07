import axios from "axios";
import { useState } from "react";
import Form from "./components/form/Form";
import Users from "./components/data/Users";
import ShowMore from "./components/ShowMore";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [btnMore, setBtnMore] = useState(false);

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
  function showMore(id) {
    setBtnMore(true);
    const filterUser = data.filter((user) => user.id === id);
    setData(filterUser);
  }
  async function back() {
    setBtnMore(false);
    setData([]);
  }
  return (
    <>
      <header>
        <h1>Github</h1>
        <ul className="listHeader">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </header>
      {!btnMore ? (
        <div className="app">
          <Form
            submit={submit}
            error={error}
            type={"text"}
            placeholder={"Search Users..."}
            searchUser={searchUser}
            setSearchUser={setSearchUser}
            isLoading={!isLoading}
            typeBtn={"button"}
            deleteUsers={deleteUsers}
            length={data.length}
          />
          <Users isLoading={isLoading} data={data} showMore={showMore} />
        </div>
      ) : (
        <ShowMore data={data} back={back} />
      )}
    </>
  );
}

export default App;
