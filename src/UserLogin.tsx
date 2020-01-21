import React from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";


/**
 * 用户登录的界面
 */
export class UserLogin extends React.Component {

    render() {
        return (
            <div className="row-wrapper">
                <div style={{marginBottom: '10px', marginTop: '10px'}}>
                    <span>username: </span><InputText value={undefined} onChange={undefined}/>
                </div>
                <div style={{marginBottom: '10px'}}>
                    <span>password: </span><InputText value={undefined} onChange={undefined}/>
                </div>
                <Button className="p-button-primary" onClick={undefined} label="Login"/>
            </div>
        )
    }
}
