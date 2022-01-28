import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
//import Search from './components/Search';
//import Accordion from './components/Accordion';
//import Counter from './components/Counter';

//const items = [
//    {
//        title: 'What is react',
//        content: 'React is a front-end javascript network'
//    },
//    {
//        title: 'Why use React?',
//        content: 'React is a favorite JS library among engineers'
//    },
//    {
//        title: 'How do you use React?',
//        content: 'You use React by creating components'
//    }
//]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                   <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options} 
                 /> : null
            }
        </div>
    );
};