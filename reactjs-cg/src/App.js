// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ShowInfor from './componnents/ShowInforBrowser';
import ShowInforStudents from './componnents/ShowInforStudents';

function App() {
  return (
    <div className="App">
      {/* <ShowInfor /> */}
      <ShowInforStudents />
    </div>
  );
}

export default App;
