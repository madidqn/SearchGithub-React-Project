function ShowMore({ data, back }) {
  return (
    <div className="showMore">
      {data.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.login}</h2>
          <div>
            <h4>
              Number of followers : <span>{user.followers_url.length}</span>
            </h4>
            <h4>
              Number of following :<span>{user.following_url.length}</span>
            </h4>
            <h4>
              Number of repository :<span>{user.repos_url.length}</span>
            </h4>
          </div>
          <button onClick={() => back()}>Back</button>
        </div>
      ))}
    </div>
  );
}
export default ShowMore;
