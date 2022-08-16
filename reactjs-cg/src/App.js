// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ShowInfor from './componnents/ShowInforBrowser';
// import ShowInforStudents from './componnents/ShowInforStudents';
import { ShowProfileCard } from './componnents/ProfileCard/ShowProfileCard';

function App() {
  return (
    <div className="App">
      {/* <ShowInfor /> */}
      {/* <ShowInforStudents /> */}
      <ShowProfileCard />
    </div>
  );
}

export default App;
