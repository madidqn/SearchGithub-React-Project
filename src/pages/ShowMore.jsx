import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { AppContext } from "../context/AppProvider";

function ShowMore() {
  const { id } = useParams();
  const { data } = useContext(AppContext);
  return (
    <div className="showMore">
      <div>
        {console.log(id)}
        {/* <img src={data[index].avatar_url} alt={data[index].login} /> */}
        {/* <h2>{data[index].login}</h2>
        <div>
          <h4>
            Number of followers :{" "}
            <span>{data[index].followers_url.length}</span>
          </h4>
          <h4>
            Number of following :<span>{data[index].following_url.length}</span>
          </h4>
          <h4>
            Number of repository :<span>{data[index].repos_url.length}</span>
          </h4>
        </div> */}
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
export default ShowMore;
