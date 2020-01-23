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
var inputtext_1 = require("primereact/inputtext");
var button_1 = require("primereact/button");
/**
 * 用户登录的界面
 */
var UserLogin = /** @class */ (function (_super) {
    __extends(UserLogin, _super);
    function UserLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLogin.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "row-wrapper" },
            react_1.default.createElement("div", { style: { marginBottom: '10px', marginTop: '10px' } },
                react_1.default.createElement("span", null, "username: "),
                react_1.default.createElement(inputtext_1.InputText, { value: undefined, onChange: undefined })),
            react_1.default.createElement("div", { style: { marginBottom: '10px' } },
                react_1.default.createElement("span", null, "password: "),
                react_1.default.createElement(inputtext_1.InputText, { value: undefined, onChange: undefined })),
            react_1.default.createElement(button_1.Button, { className: "p-button-primary", onClick: undefined, label: "Login" })));
    };
    return UserLogin;
}(react_1.default.Component));
exports.UserLogin = UserLogin;
