function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>{props.name}</h3>
      <p>ID: <strong>{props.id}</strong></p>
      <p>Department: <strong>{props.department}</strong></p>
    </div>
  );
}

export default StudentCard;
