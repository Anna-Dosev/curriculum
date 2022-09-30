import { useState } from 'react';
import Card from './components/card';
import './App.css';


function App() {
  const [selectedCard, setSelectedCard] = useState();
  function handleClick (e) {
    const card =  e.target.dataset.type //when prefixed with data- in card.jsx, you only need to say what comes after the dash
    setSelectedCard(card)
  }
  return (
    <div className='grid'>
      <Card selectedCard= {selectedCard} card = '1' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '2' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '3' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '4' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '5' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '6' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '7' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '8' action={handleClick} />
      <Card selectedCard= {selectedCard} card = '9' action={handleClick} />
    </div>
  );
};


export default App;