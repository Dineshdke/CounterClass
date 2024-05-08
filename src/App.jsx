import {Component } from 'react'
import './App.css'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }

  handleIncrement = () => {
    this.setState((prev)=>{
      return {count:prev.count+1}
    })
  }

  handleDecrement = () => {
    this.setState((prev)=>{
      return {count:prev.count-1}
    })
  }

  render(){
    return (
      <>
        <h3>Counter App</h3>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    )
  }
}

export default App;
