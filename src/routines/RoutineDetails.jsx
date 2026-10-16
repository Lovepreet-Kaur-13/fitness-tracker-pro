import { useEffect, useState } from "react";
import { deleteRoutine, getRoutine } from "../api/routines";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function RoutineDetails() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [routine, setRoutine] = useState();
  console.log(routine);

  const syncRoutine = async (id) => {
    const data = await getRoutine(id);
    setRoutine(data);
  };

  useEffect(() => {
    syncRoutine(id);
  }, [id]);

  const tryDeleteRoutine = async () => {
    setError(null);
    try {
      await deleteRoutine(token, routine.id);
      navigate("/routines");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!routine) {
    return <p>Loading..</p>;
  }
  return (
    <>
      <h1>Routine Details</h1>
      <h2>{routine.name}</h2>
      <p>{routine.goal}</p>
      <p>This routine is created by {routine.creatorName}</p>
      {token && <button onClick={tryDeleteRoutine}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}
