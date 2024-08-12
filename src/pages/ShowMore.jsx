import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AppContext } from "../context/AppProvider";

function ShowMore() {
  const { index } = useParams();
  const { data, getRepos, repos } = useContext(AppContext);
  useEffect(() => {
    getRepos(data[index].login);
  }, [index]);
  return (
    <div className="showMore">
      <div>
        <div>
          <img src={data[index].avatar_url} alt={data[index].login} />
          <h3>{data[index].login}</h3>
        </div>
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
        </div>
      </div>
      <div className="repos">
        {repos.map((re) => (
          <Link to={`${re.html_url}`} target="_blank" className="repo">
            {re.full_name}
          </Link>
        ))}
      </div>
      <Link to="/" className="btn-back">
        Back
      </Link>
    </div>
  );
}
export default ShowMore;
