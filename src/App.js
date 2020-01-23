"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var UserLogin_1 = require("./UserLogin");
require("primereact/resources/themes/nova-light/theme.css");
require("primereact/resources/primereact.min.css");
require("primeicons/primeicons.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (index) {
            var len = _this.state.history.length;
            var currentBoard = _this.state.history[len - 1];
            if (currentBoard.status[index] == '0') {
                // this place is clickable
                var currentHistory = _this.state.history;
                var currentSymbol = _this.state.currentSymbol;
                var nextSymbol = _this.flipCurrentSymbol(currentSymbol);
                var newHistory = currentBoard.status.slice();
                newHistory[index] = _this.state.currentSymbol;
                currentHistory.push({ status: newHistory });
                _this.setState({ history: currentHistory, currentSymbol: nextSymbol, msg: '' });
                if (_this.isGameOver()) {
                    _this.setState({ gameStatus: 'game is over' });
                }
            }
            else {
                _this.setState({ msg: 'space taken!' });
            }
        };
        // let me make this clear
        // first of all, if it is not set, then it is setable 
        // second, if the game is not over, then set new symbol
        _this.isGameOver = function () {
            var len = _this.state.history.length;
            var currentBoard = _this.state.history[len - 1];
            if (currentBoard.status[0] !== '0') {
                if (currentBoard.status[0] == currentBoard.status[1] && currentBoard.status[1] == currentBoard.status[2] && currentBoard.status[2] !== '0') {
                    _this.setState({ gameStatus: 'game is over ' });
                }
                else if (currentBoard.status[3] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[5] && currentBoard.status[3] !== '0') {
                    _this.setState({ gameStatus: 'game is over ' });
                }
                else if (currentBoard.status[6] == currentBoard.status[7] && currentBoard.status[7] == currentBoard.status[8] && currentBoard.status[6] !== '0') {
                    _this.setState({ gameStatus: 'game is over ' });
                }
                else if (currentBoard.status[0] == currentBoard.status[3] && currentBoard.status[3] == currentBoard.status[6] && currentBoard.status[6] !== '0') {
                    _this.setState({ gameStatus: 'game is over' });
                }
                else if (currentBoard.status[1] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[7] && currentBoard.status[1] !== '0') {
                    _this.setState({ gameStatus: 'game is over' });
                }
                else if (currentBoard.status[2] == currentBoard.status[5] && currentBoard.status[5] == currentBoard.status[7] && currentBoard.status[2] !== '0') {
                    _this.setState({ gameStatus: 'game is over' });
                }
                else if (currentBoard.status[0] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[8] && currentBoard.status[0] !== '0') {
                    _this.setState({ gameStatus: 'game is over' });
                }
                else if (currentBoard.status[6] == currentBoard.status[4] && currentBoard.status[4] == currentBoard.status[2] && currentBoard.status[6] !== '0') {
                    _this.setState({ gameStatus: 'game is over' });
                }
                return true;
            }
            return false;
        };
        _this.flipCurrentSymbol = function (symbol) {
            return symbol === 'O' ? 'X' : 'O';
        };
        /**
         * time travel
         */
        _this.handleGoBack = function () {
            var length = _this.state.history.length;
            var previousBoard = null;
            if (length >= 2) {
                previousBoard = _this.state.history[length - 1 - 1];
            }
            // this.setState({history: previousBoard})
        };
        _this.state = {
            msg: '',
            history: [{ status: new Array(9).fill('0') }],
            gameStatus: "on Going ...",
            currentSymbol: 'X'
        };
        return _this;
    }
    App.prototype.render = function () {
        var length = this.state.history.length;
        var current = this.state.history[length - 1];
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("h3", null,
                "next player is: ",
                this.state.currentSymbol),
            react_1.default.createElement("h3", null,
                "Game is ",
                this.state.gameStatus,
                "  "),
            react_1.default.createElement(Board, { onClick: this.handleClick, object: current }),
            react_1.default.createElement("button", { style: { marginTop: '20px' }, onClick: this.handleGoBack }, "go back"),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { style: { color: 'red' } }, this.state.msg)),
            react_1.default.createElement(UserLogin_1.UserLogin, null)));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.render = function () {
        var _this = this;
        var current = this.props.object.status;
        return (react_1.default.createElement("div", { className: "row-wrapper" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(0); } }, current[0]),
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(1); } }, current[1]),
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(2); } }, current[2])),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(3); } }, current[3]),
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(4); } }, current[4]),
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(5); } }, current[5])),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(6); } }, current[6]),
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(7); } }, current[7]),
                react_1.default.createElement("div", { onClick: function (e) { return _this.props.onClick(8); } }, current[8]))));
    };
    return Board;
}(react_1.default.Component));
