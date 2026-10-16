import { useEffect, useState } from "react";
import { getRoutine } from "../api/routines";
import { useParams } from "react-router";

export default function RoutineDetails() {
  const { id } = useParams();
  const [routine, setRoutine] = useState();
  console.log(routine);

  const syncRoutine = async (id) => {
    const data = await getRoutine(id);
    setRoutine(data);
  };

  useEffect(() => {
    syncRoutine(id);
  }, [id]);

  if (!routine) {
    return <p>Loading..</p>;
  }
  return (
    <>
      <h1>Routine Details</h1>
      <h2>{routine.name}</h2>
      <p>{routine.goal}</p>
      <p>This routine is created by {routine.creatorName}</p>
    </>
  );
}
