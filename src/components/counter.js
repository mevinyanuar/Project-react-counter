import React from 'react'

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            countNumber:0
        }
    }
    additionIncrement = () => {
        this.setState({
            countNumber: this.state.countNumber+1
        }) 
    }
    reduceDecrement = () => {
        if(this.state.countNumber === 0){
            alert("You Can't")
        }else{
            this.setState({
                countNumber: this.state.countNumber-1
            })
        }
    }
    render(){
        return(
            <div>
                <h3>COUNTER</h3>
                <h2>{this.state.countNumber}</h2>
                <div class='button-central'>
                    <button class="both-button" onClick={this.additionIncrement}>+</button>
                    <button class="both-button2" onClick={this.reduceDecrement}>-</button>
                </div>
            </div>
        )
    }
        
}

export default Counter
