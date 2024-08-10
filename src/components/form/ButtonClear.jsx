import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

function ButtonClear() {
  const { data, deleteUsers } = useContext(AppContext);
  return (
    <>
      {data.length > 0 && (
        <button
          className="deleteData"
          type="button"
          onClick={() => deleteUsers()}
        >
          Clear
        </button>
      )}
    </>
  );
}
export default ButtonClear;
