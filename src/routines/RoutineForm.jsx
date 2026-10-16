export default function RoutineForm() {
  return (
    <>
      <h2>Add a new routine</h2>
      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Goal
          <input type="text" name="goal" />
        </label>
        <button>Add routine</button>
      </form>
    </>
  );
}
