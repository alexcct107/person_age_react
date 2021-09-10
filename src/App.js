import React from 'react';
import './App.css';
import Footer from './components/footer';
import PersonCard from './components/personcard';

function App() {
  return (
    <div>
      <PersonCard firstName="Doe" lastName="Jane" age = {45} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="John" age = {88} hairColor="Brown" />
      <PersonCard firstName="Fillmore" lastName="Millard" age = {50} hairColor="Brown" />
      <PersonCard firstName="Smith" lastName="Maria" age = {62} hairColor="White" />
      <Footer />
    </div>
  )
}

export default App;
