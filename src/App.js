import React, { Component } from 'react';
import List from './List'
import './App.css';
import {STORE} from './store';


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId, listId) => {
    let lists = this.state.store.lists;
    let allCards = this.state.store.allCards;
    const newLists = lists.map(list => ({
      ...list,
      cardIds: (list.id===listId)?list.cardIds.filter(id => id !== cardId):list.cardIds
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: allCards
      }
    })
  };

  handleAddRandomCard=(listId) => {
    let newCard = newRandomCard();
    let newStore = this.state.store;

    const newLists = newStore.lists.map(list => {
      if (list.id === listId) {
        list.cardIds.push(newCard.id);
      }
    });
    console.log(this.state.store);
  }

  render() {
    const {store} = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}   
              onClickDeleteCard = {this.handleDeleteCard}
              onClickAddRandomCard = {this.handleAddRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
