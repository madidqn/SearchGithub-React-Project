import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppProvider";

function User({ index }) {
  const { data } = useContext(AppContext);
  const id = data[index].id;
  const indexSend = index;
  return (
    <li>
      <img src={data[index].avatar_url} alt={data[index].type} />
      <h3>{data[index].login}</h3>
      <Link to={`/show-more?${id}?`} className="btn-more">
        More
      </Link>
      {console.log(data[index].id, index)}
    </li>
  );
}
export default User;
