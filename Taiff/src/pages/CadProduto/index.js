import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

class CadProduto extends Component{

render(){
    return(
        <div className="container">
            <Header/>
                <form>
                    <div className="fields">
                        <label>Nome</label>
                        <input/>
                    </div>

                    <div className="fields">
                        <label>Modelo</label>
                        <input/>
                    </div>
                </form>
            <Footer/>
        </div>
    );
}

}

export default CadProduto