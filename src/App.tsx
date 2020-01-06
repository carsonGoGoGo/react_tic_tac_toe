import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Board/>
            </div>
        )
    }
}

export default App;

/**
 *
 */
class Board extends React.Component {
    render() {
        return (
            <div className="row-wrapper">
                <div className="row">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <div className="row">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <div className="row">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
        )
    }
}
