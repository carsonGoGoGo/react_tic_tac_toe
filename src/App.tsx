import React from 'react';
import './App.css';


interface IAppProps {

}

interface IAppState {
    nextSymbol: string;
    gameStatus: string;
    history: any[];
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            history: [{ status: new Array(9).fill('0') }],
            gameStatus: "on Going ...",
            nextSymbol: 'X'
        }
    }

    handleClick = (index: number) => {
        const len = this.state.history.length;
        const current = this.state.history[len - 1];
        const { nextSymbol } = this.state;

        if (current.status[index] == '0') {
            const newCurrent = current.status.slice();
            newCurrent[index] = nextSymbol;
            const newHistory = this.state.history.slice();
            newHistory.push({ status: newCurrent });

            const newNextSymbol = this.flipCurrentSymbol(nextSymbol);
            this.setState({ history: newHistory, nextSymbol: newNextSymbol });
            this.determineWinner();
        }
    };

    determineWinner = () => {
        const len = this.state.history.length;
        const currentBoard = this.state.history[len - 1];

        
        //
        // if (currentBoard.status[0] !== '0') {
        //     if (currentBoard.status[0] == currentBoard.status[1] == currentBoard.status[2]) {
        //         this.setState({ gameStatus: 'game is over' })
        //     } else if (currentBoard.status[0] == currentBoard.status[3] == currentBoard.status[6]) {
        //         this.setState({ gameStatus: 'game is over' })
        //     } else if (currentBoard.status[0] == currentBoard.status[4] == currentBoard.status[8]) {
        //         this.setState({ gameStatus: 'game is over' })
        //     } else if (currentBoard.stattus[3] == currentBoard.status[4] == currentBoard.status[5]) {
        //         this.setState({ gameStatus: 'game is over' })
        //     } else if (currentBoard.status[6] == currentBoard.status[7] == currentBoard.status[8]) {
        //         this.setState({ gameStatus: 'game is over' })
        //     }
        // }

    };


    // process = () => {
    //     ()=>{}, 
    //     ()=>{},
    // }

    flipCurrentSymbol = (symbol: string): string => {
        return symbol === 'O' ? 'X' : 'O';
    };

    /**
     * deterimine this grid could be filled or not
     */
    isSetable = (index: number) => {
        const len = this.state.history.length;
        const current = this.state.history[len - 1];
        return current.status[index] == '0';
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
                <Board onClick={this.handleClick} object={current} />

                <button style={{ marginTop: '20px' }} onClick={this.handleGoBack}>go back</button>
            </div>
        )
    }
}

export default App;

/**
 *
 */
interface IBoardProps {
    object: { status: string[] };
    onClick: (index: number) => void;
}

interface IBoardState {

}

class Board extends React.Component<IBoardProps, IBoardState> {

    render() {
        const current = this.props.object.status;
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
