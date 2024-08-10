import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

import InputSearch from "./InputSearch";
import ButtonSubmit from "./ButtonSubmit";
import ButtonClear from "./ButtonClear";

function Form({}) {
  const { submit, error } = useContext(AppContext);
  return (
    <form onSubmit={(e) => submit(e)} className={error ? "active" : ""}>
      <InputSearch />
      <ButtonSubmit />
      <ButtonClear />
    </form>
  );
}
export default Form;
