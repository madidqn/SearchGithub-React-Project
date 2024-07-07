function User({ src, alt, login, id, showMore }) {
  return (
    <li>
      <img src={src} alt={alt} />
      <h3>{login}</h3>
      <button onClick={() => showMore(id)}>More</button>
    </li>
  );
}
export default User;
