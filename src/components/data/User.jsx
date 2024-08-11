import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppProvider";

function User({ index }) {
  const { data } = useContext(AppContext);
  return (
    <li>
      <img src={data[index].avatar_url} alt={data[index].type} />
      <h3>{data[index].login}</h3>
      <Link to={`/show-more/${index}`} className="btn-more">
        More
      </Link>
    </li>
  );
}
export default User;
