import React from 'react'

//stateful component

class GreetingState extends React.Component{
constructor(props)  {
    super(props);
    this.state={
        apaAjaBoleh: 'stateful component',
        toggle: false
        }
    
    }
    changeName = () => {
        this.setState(prevState =>({
            //name:"stateful component changed"
            toggle: !prevState.toggle
        }))
}

    render() {
        //console.log(this.props)
        return(
            <div onClick={this.changeName}>
                hallo dari {this.state.toggle ? "yes" : "no"}
            </div>
        )
    }
}

export default GreetingState