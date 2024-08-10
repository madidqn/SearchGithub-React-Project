import { useContext } from "react";

import { AppContext } from "../../context/AppProvider";

import User from "./User";

function Users() {
  const { data, isLoading } = useContext(AppContext);
  return (
    <ul className="listUsers">
      {isLoading && <p className="spinner"></p>}
      {data.map((user, index) => (
        <User key={user?.id} index={index} />
      ))}
    </ul>
  );
}
export default Users;
