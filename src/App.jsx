import './App.css';
import Student from "./Student";

function App() {
  return (
    <>
    <h1>Danh sach Sinh Vien</h1>
    <div className="container">
      
      <Student name="Vo Nguyen Phuong Uyen" age = {16} birth = "17/08/2009"/>
      <Student name="Cao Bao Tran" age = {16} birth = "16/08/2009"/>
      <Student name="Than Thi Thien Kieu" age = {16} birth = "28/03/2009"/>
    </div>
    </>
  );
}

export default App;