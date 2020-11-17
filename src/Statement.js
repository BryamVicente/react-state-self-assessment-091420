import React from 'react'


class Statement extends React.Component {
    state = {
        clickedState: this.props.noStatement,
        clickedImg: this.props.noImage
    } 


    displayStatement = () => {
        if (this.state.clickedStatement=== this.props.noStatement){
            this.setState({clickedStatement: this.props.yesStatement})
            this.setState({clickedImg: this.props.yesImage})
        }else{
            this.setState({clickedStatement: this.props.noStatement})
            this.setState({clickedImg: this.props.noImage})
        }
    }
    render(){
    return(
        <div class="app">
            <div class="display">
                <h1>{this.state.clickedStatement}</h1>
                <img alt="what" src={this.state.clickedImg} onClick= {this.displayStatement}></img>
            </div>
        </div>
    ) 
    
    }
}

export default Statement;