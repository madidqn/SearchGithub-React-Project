import InputSearch from "./InputSearch";
import ButtonSubmit from "./ButtonSubmit";
import ButtonClear from "./ButtonClear";

function Form({
  submit,
  isValue,
  type,
  placeholder,
  searchUser,
  setSearchUser,
  isLoading,
  typeBtn,
  deleteUsers,
  length,
}) {
  return (
    <form onSubmit={(e) => submit(e)} className={isValue ? "active" : ""}>
      <InputSearch
        type={type}
        placeholder={placeholder}
        searchUser={searchUser}
        setSearchUser={setSearchUser}
      />
      <ButtonSubmit isLoading={isLoading} />
      <ButtonClear type={typeBtn} deleteUsers={deleteUsers} length={length} />
    </form>
  );
}
export default Form;
