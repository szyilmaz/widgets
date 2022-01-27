import React from 'react';

const useState = React.useState;

export default function Counter(){

    const [count, setCount] = useState(0);
    const onButtonClick = () => {
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            <h1>Current count : {count}</h1>
        </div>
    );
}