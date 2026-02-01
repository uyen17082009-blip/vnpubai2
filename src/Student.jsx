function Student(props) {
  return (
    <div style={{
      textAlign: 'center', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '10px',
      marginTop: '20px',
      backgroundColor: "white"
    }}>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.birth}</h2>
    </div>
  );
}

export default Student;