import './App.css';


function Student(props) {
  return (
    <>
    <div className="tb" style={{
      textAlign: 'center', 
      padding: '20px', 
      border: '1px solid #55464dff', 
      borderRadius: '10px',
      marginTop: '20px',
      backgroundColor: "white"
    }}>
      <h3>Ho Ten: {props.name}</h3>
      <p>Tuoi: {props.age}</p>
      <p>Ngay Sinh: {props.birth}</p>
    </div>
    </>
  )
}

export default Student;