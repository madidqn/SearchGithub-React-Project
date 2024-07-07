import User from "./User";
function Users({ isLoading, data }) {
  return (
    <ul className="listUsers">
      {isLoading && <p className="spinner"></p>}
      {data.map((user) => (
        <User
          key={user?.id}
          src={user?.avatar_url}
          alt={user?.type}
          login={user?.login}
        />
      ))}
    </ul>
  );
}
export default Users;
