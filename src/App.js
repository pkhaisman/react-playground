import React from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <TheDate />
                <Counter />
            </div>
        );
    }
}

export default App;
			