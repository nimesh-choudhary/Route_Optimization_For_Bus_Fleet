import React from "react";
import "./College.css";
import Footbar from "./Footbar";
import Nav from "./Nav";

function College(){
    return(
        <div>
        <Nav/>
            <div className="banner">
                <div className="box">
                    <div className="college-box">
                        <div className="color-box"></div>
                        <h1 className="college-text">Find Campus</h1>
                        <div className="campus-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        <Footbar/>
        </div>
    )
}
export default College;