import React from "react";
import Navigation from "../components/Auth/navigation"


const Header = ()=>{
    return(
        <div className="header">
            <div className="container">
                <div className="header_content">
                    <Navigation/>
                </div>
            </div>
        </div>
    )
}
export default Header