import React from 'react';
import './App.css';


interface IAppProps {

}

interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props:any) {
        super(props);
        this.state = {}
    }

    handleClick = () => {
        console.log('clicked ');
    };

    render() {
        return (
            <div className="App">
                <Board onClick={this.handleClick}/>
            </div>
        )
    }
}

export default App;

/**
 *
 */
interface IBoardProps {
    onClick: () => void;
}

interface IBoardState {

}

class Board extends React.Component<IBoardProps, IBoardState> {
    render() {
        return (
            <div className="row-wrapper">
                <div className="row">
                    <div onClick={this.props.onClick}>1</div>
                    <div onClick={this.props.onClick}>1</div>
                    <div onClick={this.props.onClick}>1</div>
                </div>
                <div className="row">
                    <div onClick={this.props.onClick}>1</div>
                    <div onClick={this.props.onClick}>1</div>
                    <div onClick={this.props.onClick}>1</div>
                </div>
                <div className="row">
                    <div onClick={this.props.onClick}>1</div>
                    <div onClick={this.props.onClick}>1</div>
                    <div onClick={this.props.onClick}>1</div>
                </div>
            </div>
        )
    }
}
