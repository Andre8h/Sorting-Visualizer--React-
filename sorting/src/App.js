import React, {Component} from 'react';
import './App.css';
import Bar from './components/Bar';

class App extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 10,
    delay: 100,
    alforithm: '',
    timeouts: [],

  };

  componentDidMount(){
    this.generateRandomArray();
  };


  generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min)
  };

  generateRandomArray = () => {
    const count = this.state.count;
    const temp = [];

    for(let i = 0; i < count ; i++){
      temp.push(this.generateRandomNumber(50,200))
    }

    this.setState({
      array:temp,
      arraySteps: [temp]
    })
  };

  render(){
    let bars = this.state.array.map((value,index) =>{
      return <Bar key={index} 
      index={index} 
      length={value} 
      color={this.state.colorKey[index]}
      />;
    })
    return (
      <div className="app">
        [bars]
      </div>
    );
  }
}

export default App;

