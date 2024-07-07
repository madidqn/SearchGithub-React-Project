function InputSearch({ type, placeholder, searchUser, setSearchUser }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={searchUser}
      onChange={(e) => setSearchUser(e.target.value)}
    />
  );
}
export default InputSearch;
