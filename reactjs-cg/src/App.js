// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ShowInfor from './componnents/ShowInforBrowser';
// import ShowInforStudents from './componnents/ShowInforStudents';
// import { ShowProfileCard } from './componnents/ProfileCard/ShowProfileCard';
// import { LoginForm } from './componnents/Login/Login';
// import { AlertComponent } from './componnents/AlertComponent';
// import ShowStudentList from './componnents/StudentList/ShowStudentList';
// import ExpandButton from './componnents/ExpandButton';
// import Calculator from './componnents/Calculator/Calculator';
import LoginForm from './componnents/LoginForm/LoginForm';


function App() {
  return (
    <div className="App">
      {/* <ShowInfor /> */}
      {/* <ShowInforStudents /> */}
      {/* <ShowProfileCard /> */}
      {/* <LoginForm /> */}
      {/* <AlertComponent text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." /> */}
      {/* <ShowStudentList /> */}
      {/* <ExpandButton /> */}
      {/* <Calculator /> */}
      <LoginForm />
    </div>
  );
}

export default App;
