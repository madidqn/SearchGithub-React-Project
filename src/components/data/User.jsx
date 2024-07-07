function User({ src, alt, login }) {
  return (
    <li>
      <img src={src} alt={alt} />
      <h3>{login}</h3>
      <button>More</button>
    </li>
  );
}
export default User;
