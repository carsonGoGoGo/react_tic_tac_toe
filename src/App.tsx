import React from 'react';
import './App.css';


interface IAppProps {

}

interface IAppState {
    board: string[];
    nextSymbol: string;
    gameStatus: string;
    history: any[];
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: [{status: new Array(9).fill('0')}],
            gameStatus: "on Going ...",
            board: new Array(9).fill('0'),
            nextSymbol: 'X'
        }
    }

    handleClick = (index: number) => {
        if (this.isSetable(index)) {
            this.state.board[index] = this.state.nextSymbol;
            let newHistory = this.state.history.slice();

            let length = this.state.history.length;
            newHistory.push({
                status: this.state.history[length-1].status
            });
            this.setState({history: newHistory})
        } else {
            return;
        }
        this.setState({
            board: this.state.board
        });
        const updatedSymbol = this.flipCurrentSymbol(this.state.nextSymbol);
        this.setState({
            nextSymbol: updatedSymbol
        });
    };

    flipCurrentSymbol = (symbol: string): string => {
        return symbol === 'O' ? 'X' : 'O';
    };

    /**
     * deterimine this grid could be filled or not
     */
    isSetable = (index: number) => {
        return this.state.board[index] == '0';
    };

    /**
     * time travel
     */
    handleGoBack = () => {
        console.log("go back hhaha ")
    };

    render() {
        const length = this.state.history.length;
        const current = this.state.history[length - 1];
        return (
            <div className="App">
                <h3>next player is: {this.state.nextSymbol}</h3>
                <h3>Game is {this.state.gameStatus}  </h3>
                <Board onClick={this.handleClick} array={current}/>

                <button style={{marginTop: '20px'}} onClick={this.handleGoBack}>go back</button>
            </div>
        )
    }
}

export default App;

/**
 *
 */
interface IBoardProps {
    array: string[];
    onClick: (index: number) => void;
}

interface IBoardState {

}

class Board extends React.Component<IBoardProps, IBoardState> {

    render() {
        const current = this.props.array;
        return (
            <div className="row-wrapper">
                <div className="row">
                    <div onClick={(e: any) => this.props.onClick(0)}>{current[0]}</div>
                    <div onClick={(e: any) => this.props.onClick(1)}>{current[1]}</div>
                    <div onClick={(e: any) => this.props.onClick(2)}>{current[2]}</div>
                </div>
                <div className="row">
                    <div onClick={(e: any) => this.props.onClick(3)}>{current[3]}</div>
                    <div onClick={(e: any) => this.props.onClick(4)}>{current[4]}</div>
                    <div onClick={(e: any) => this.props.onClick(5)}>{current[5]}</div>
                </div>
                <div className="row">
                    <div onClick={(e: any) => this.props.onClick(6)}>{current[6]}</div>
                    <div onClick={(e: any) => this.props.onClick(7)}>{current[7]}</div>
                    <div onClick={(e: any) => this.props.onClick(8)}>{current[8]}</div>
                </div>
            </div>
        )
    }
}

/**
 *  every single grid
 */
// function Square(props) {
//     return <div onClick={props.onClick}>
//         {props.array.status}
//     </div>
// }
