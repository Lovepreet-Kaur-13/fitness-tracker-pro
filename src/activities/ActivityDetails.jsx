import { useEffect, useState } from "react";
import { deleteActivity, getactivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate, useParams } from "react-router";

export default function ActivityDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState();
  console.log(activity);

  const [error, setError] = useState(null);
  const syncActivities = async (id) => {
    const data = await getactivity(id);
    setActivity(data);
  };

  useEffect(() => {
    syncActivities(id);
  }, [id]);

  const tryDelete = async () => {
    setError(null);
    try {
      await deleteActivity(token, activity.id);
      //   syncActivities();
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!activity) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>The activity is created by {activity.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}
