import { AppContext } from "../../context/AppProvider";
import { useContext } from "react";
function InputSearch() {
  const { searchUser, setSearchUser } = useContext(AppContext);
  return (
    <>
      <input
        type="text"
        placeholder={"Search Users..."}
        value={searchUser}
        onChange={(e) =>
          // dispatch({ type: "valueInput", payload: e.target.value })
          setSearchUser(e.target.value)
        }
      />
    </>
  );
}
export default InputSearch;
