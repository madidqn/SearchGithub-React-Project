import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "../context/AppProvider";

function ShowMore() {
  const { index } = useParams();
  const { data, getRepos, repos } = useContext(AppContext);
  // useEffect(() => {
  //   getRepos(data[index].login);
  // });
  // getRepos(data[index].login);
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
      {/* <div className="repos">
        {repos.map((re) => (
          <Link to={`${re.html_url}`}>salam</Link>
        ))}
      </div> */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam
        nemo impedit a non, iure officia, itaque quisquam perspiciatis aliquid
        totam autem porro quidem, vero sequi. Rerum sequi architecto
        consequatur.
      </div>
      <Link to="/" className="btn-back">
        Back
      </Link>
    </div>
  );
}
export default ShowMore;
