import React from 'react';
import Accordion from './components/Accordion';
import Counter from './components/Counter';

const items = [
    {
        title: 'What is react',
        content: 'React is a front-end javascript network'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

class App extends React.Component {
    render() {
        return (
            <div>
                <Accordion items={items} />
                <Counter />
            </div>
        );
    };
}

export default App;