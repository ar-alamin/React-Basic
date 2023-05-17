import React from "react";

const withCounter = (OriginalComponent)=> {
    class NewComponent extends React.Component {
        state = {
            count: 0
        }  
        
        handleIncrement = ()=> {
            this.setState((prevState)=> ({
                count: prevState.count + 1,
            }));
        } 
        render(){
            const { count } = this.state;
            return <OriginalComponent count={count} handleIncrement={this.handleIncrement} />
        }
    }
    return NewComponent;
}

export default withCounter;