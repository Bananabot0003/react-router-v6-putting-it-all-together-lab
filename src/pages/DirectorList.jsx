
import { Link, useOutletContext } from "react-router-dom";

function DirectorList() {
  const { directors } = useOutletContext();

  return (
    <>
      <h2>Directors</h2>
      <Link to="/directors/new">Add New Director</Link>

      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>
              {director.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DirectorList;
