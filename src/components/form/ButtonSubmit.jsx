import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

function ButtonSubmit() {
  const { isLoading } = useContext(AppContext);
  return (
    <>
      {!isLoading ? (
        <button className="getData">Submit Query</button>
      ) : (
        <button className="getData" disabled>
          Submit Query
        </button>
      )}
    </>
  );
}
export default ButtonSubmit;
