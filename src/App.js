import React from 'react';
import PersonList from './PersonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-3">
        <h1>Lab 11 - Working with Axios and Fetch API</h1>
        <p className="mb-0">COMP3123 - Full Stack Development I</p>
      </header>
      <PersonList />
    </div>
  );
}

export default App;
