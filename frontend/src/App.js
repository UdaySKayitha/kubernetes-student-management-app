import React from 'react';
import './App.css';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Student Management App</h1>
      </header>
      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;

