import React from 'react';
import './List.css';
import Card from './Card';

function List(props){
    const cards = props.cards;
    const cardsLis = cards.map((card)=> 
        <Card key = {card.id} title={card.title} content={card.content}/>
    );

    return (
        <section className='List'>
            <header className='List-header'>   
                <h2>{props.title}</h2>    
            </header>  
            <div className="List-cards">
                {cardsLis}
                <button type="button" className="List-add-button"> + Add Random Card</button>
            </div>
        </section>
    )
}
export default List;
