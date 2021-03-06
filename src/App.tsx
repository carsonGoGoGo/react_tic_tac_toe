import React from 'react';
import './App.css';
import {UserLogin} from "./UserLogin";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface IBoard {
    status: string[];
}

interface IAppProps {

}


interface IAppState {
    currentSymbol: string;
    gameStatus: string;
    history: IBoard[];
    msg: string;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            msg: '',
            history: [{status: new Array(9).fill('0')}],
            gameStatus: "on Going ...",
            currentSymbol: 'X'
        }
    }

    handleClick = (index: number) => {
        const len = this.state.history.length;
        const currentBoard = this.state.history[len - 1];

        if (currentBoard.status[index] == '0') {

            // this place is clickable
            const currentHistory = this.state.history;
            const currentSymbol = this.state.currentSymbol;
            const nextSymbol = this.flipCurrentSymbol(currentSymbol);
            const newHistory = currentBoard.status.slice();
            newHistory[index] = this.state.currentSymbol;
            currentHistory.push({status: newHistory});
            this.setState({history: currentHistory, currentSymbol: nextSymbol, msg:''});

            if (this.isGameOver()) {
                this.setState({gameStatus: 'game is over'})
            }
        }else {
            this.setState({msg: 'space taken!'})
        }
    };


    // let me make this clear
    // first of all, if it is not set, then it is setable 
    // second, if the game is not over, then set new symbol

    isGameOver = (): boolean => {
        const len = this.state.history.length;
        const currentBoard = this.state.history[len - 1];

        if (currentBoard.status[0] !== '0') {
            if (currentBoard.status[0] == currentBoard.status[1] && currentBoard.status[1] == currentBoard.status[2] && currentBoard.status[2] !== '0') {
                this.setState({gameStatus: 'game is over '});
            } else if (currentBoard.status[3] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[5] && currentBoard.status[3] !== '0') {
                this.setState({gameStatus: 'game is over '});
            } else if (currentBoard.status[6] == currentBoard.status[7] && currentBoard.status[7] == currentBoard.status[8] && currentBoard.status[6] !== '0') {
                this.setState({gameStatus: 'game is over '});
            } else if (currentBoard.status[0] == currentBoard.status[3] && currentBoard.status[3] == currentBoard.status[6] && currentBoard.status[6] !== '0') {
                this.setState({gameStatus: 'game is over'});
            } else if (currentBoard.status[1] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[7] && currentBoard.status[1] !== '0') {
                this.setState({gameStatus: 'game is over'});
            } else if (currentBoard.status[2] == currentBoard.status[5] && currentBoard.status[5] == currentBoard.status[7] && currentBoard.status[2] !== '0') {
                this.setState({gameStatus: 'game is over'});
            } else if (currentBoard.status[0] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[8] && currentBoard.status[0] !== '0') {
                this.setState({gameStatus: 'game is over'});
            } else if (currentBoard.status[6] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[2] && currentBoard.status[6] !== '0') {
                this.setState({gameStatus: 'game is over'})
            }
            return true;
        }
        return false;
    };

    flipCurrentSymbol = (symbol: string): string => {
        return symbol === 'O' ? 'X' : 'O';
    };


    /**
     * time travel
     */
    handleGoBack = () => {
        const length = this.state.history.length;

        let previousBoard = null;
        if (length >= 2) {
            previousBoard = this.state.history[length - 1 - 1];
        }

        // this.setState({history: previousBoard})
    };

    render() {
        const length = this.state.history.length;
        const current = this.state.history[length - 1];
        return (
            <div className="App">
                <h3>next player is: {this.state.currentSymbol}</h3>
                <h3>Game is {this.state.gameStatus}  </h3>
                <Board onClick={this.handleClick} object={current}/>

                <button style={{marginTop: '20px'}} onClick={this.handleGoBack}>go back</button>
                <div>
                    <span style={{color: 'red'}}>{this.state.msg}</span>
                </div>

                <UserLogin />
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
