import { act, useEffect, useState } from "react";
import { getActivities } from "../api/activities";

export default function SetsForm() {
  const [activities, setActivities] = useState([]);

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    syncActivities();
  }, []);

  return (
    <>
      <h2>Add a Set</h2>
      <form action="">
        <label>
          Activity
          <select name="activity">
            {activities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Count
          <input type="number" name="count" />
        </label>
        <button>Add set</button>
      </form>
    </>
  );
}
