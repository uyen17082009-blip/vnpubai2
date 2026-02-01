function Student(props) {
  return (
    <>
    <div style={{
      textAlign: 'center', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '10px',
      marginTop: '20px',
      backgroundColor: "white"
    }}>
        <h1>THONG TIN</h1>
      <h2>Ho Ten: {props.name}</h2>
      <p>Tuoi: {props.age}</p>
      <p>Ngay Sinh: {props.birth}</p>
    </div>
    </>
  )
}

export default Student;