// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ShowInfor from './componnents/ShowInforBrowser';
// import ShowInforStudents from './componnents/ShowInforStudents';
// import { ShowProfileCard } from './componnents/ProfileCard/ShowProfileCard';
// import { LoginForm } from './componnents/Login/Login';
import { AlertComponent } from './componnents/AlertComponent';

function App() {
  return (
    <div className="App">
      {/* <ShowInfor /> */}
      {/* <ShowInforStudents /> */}
      {/* <ShowProfileCard /> */}
      {/* <LoginForm /> */}
      <AlertComponent text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
    </div>
  );
}

export default App;
