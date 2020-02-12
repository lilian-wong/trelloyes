import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import List from './List';
import renderer from 'react-test-renderer';

const sampleCards = [
    {id: 'a', title: 'Twelfth card', content: 'lorem ipsum'},
    {id: 'b', title: 'Twelfth card', content: 'lorem ipsum'}
];

const sampleId = ['a','b']

const sampleCardsLis = [
    {id: "j", title: "Tenth card", content: "lorem ipsum"},
    {id: "l", title: "Twelfth card", content: "lorem ipsum"}
]

describe('Card and List Component', () => {
    it('render Card without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
    });

    it('render List without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={sampleCardsLis}/>, div);
    });

    it('Card component is working', ()=>{
        const tree = renderer
            .create(<Card key = '1' title='testTitle' content='testContent'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('List component is working', ()=>{
        const tree = renderer
            .create(<List key = {sampleId} title='testTitle' cards={sampleCards} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});