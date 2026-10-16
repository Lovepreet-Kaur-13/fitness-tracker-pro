export default function SetsForm() {
  return (
    <>
      <h2>Add a Set</h2>
      <form action="">
        <label>
          Activity
          <select name="activity">
            <option value="yoga">Yoga</option>
            <option value="jogin">Jogin</option>
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
