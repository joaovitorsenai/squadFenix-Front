import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

class CadZeroPeca extends Component{

render(){
    return(
        <div className="container">
            <Header/>
                <form>
                    <div className="fields">
                        <label>X</label>
                        <input/>
                    </div>

                    <div className="fields">
                        <label>Y</label>
                        <input/>
                    </div>
                    <div className="fields">
                        <label>Z</label>
                        <input/>
                    </div>

                    <div className="fields">
                        <label>Rotação</label>
                        <input/>
                    </div>
                </form>
            <Footer/>
        </div>
    );
}

}

export default CadZeroPeca