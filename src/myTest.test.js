import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';


it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    //ReactDOM.unmountComponentAtNode('div');
});

it('working', ()=>{
    const tree = renderer
        .create(<div>Here</div>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});