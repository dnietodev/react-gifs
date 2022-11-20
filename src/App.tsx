import { useState } from 'react';
import './App.css';
import ListOfGifs from './components/listOfGifs';

import { Link, Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/ibai">Ibai</Link>
        <Link to="/gif/rubius">Rubius</Link>
        <Link to="/gif/alexby">alexby</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
