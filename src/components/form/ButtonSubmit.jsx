function ButtonSubmit({ isLoading }) {
  return (
    <>
      {isLoading ? (
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
