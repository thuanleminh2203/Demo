import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Results from "./components/Resutls";
import Reset from "./components/Reset";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize : 15
    }
  }

  onSetColor = (param) =>{
    this.setState({
      color: param
    })
  }
 onChangeSize = (value)=>{
    // console.log(value)
    this.setState({
      fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? (this.state.fontSize + value) : this.state.fontSize,
    })
 }
 onSettingDefault = (value) =>{
    if(value){
      this.setState({
        color: 'red',
        fontSize :15
      })
    }
 }
  render() {
    return (
      <div className="container mt-50">
        <ColorPicker  color={this.state.color} onReceiveColor={this.onSetColor}/>
        <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
        <Results color={this.state.color} fontSize={this.state.fontSize}/>
        <Reset onSettingDefault={this.onSettingDefault}/>
       
      </div>
    );
  }
}

export default App;
