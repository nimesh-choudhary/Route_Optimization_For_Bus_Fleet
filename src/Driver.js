import React from "react";
import "./Driver.css";
import Footbar from "./Footbar";
import Nav from "./Nav";
// import "./College.css";

function Driver(){
    return(
        <div>
        <Nav/>
            <div className="banner">
                <div className="box">
                    <div className="driver-box">
                        <div className="color-box"></div>
                        <h1 className="driver-text">Find Driver</h1>
                        <div className="campus-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        <Footbar/>
        </div>
    )
}
export default Driver;