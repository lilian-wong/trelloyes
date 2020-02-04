import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  
  const listArray = props.store.lists;
  const allCards = props.store.allCards;

  const cardLis = listArray.map( (i) => {
    const newList = i.cardIds.map ((cardId)=> allCards[cardId]);
    return <List key={i.id} title={i.header} cards={newList} />
  });

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {cardLis}
      </div>
    </main>
  );
}

export default App;
