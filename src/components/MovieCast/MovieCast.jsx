import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.cast_id}>{actor.name}</li>
      ))}
    </ul>
  );
};

export default MovieCast;
