export function SetsList({ sets }) {
  return sets.length > 0 ? (
    <ul>
      {sets.map((set) => (
        <SetListItem key={set.id} set={set} />
      ))}
    </ul>
  ) : (
    <p>This routine doesnt have any sets. Add one?</p>
  );
}

export function SetListItem({ set }) {
  return (
    <li>
      {set.name} × {set.count}
    </li>
  );
}
