import User from "./User";
function Users({ isLoading, data, showMore }) {
  return (
    <ul className="listUsers">
      {isLoading && <p className="spinner"></p>}
      {data.map((user) => (
        <User
          key={user?.id}
          src={user?.avatar_url}
          alt={user?.type}
          login={user?.login}
          id={user.id}
          showMore={showMore}
        />
      ))}
    </ul>
  );
}
export default Users;
