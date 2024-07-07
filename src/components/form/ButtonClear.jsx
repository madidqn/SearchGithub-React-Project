function ButtonClear({ type, deleteUsers, length }) {
  return (
    <>
      {length > 0 && (
        <button
          className="deleteData"
          type={type}
          onClick={() => deleteUsers()}
        >
          Clear
        </button>
      )}
    </>
  );
}
export default ButtonClear;
