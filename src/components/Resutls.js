import React, { Component } from "react";

class Results extends Component {
  // setStyle(){
  //   return {
  //     color : this.props.color
  //   }
  // }
  setColor(){
    return {
      color: this.props.color,
      borderColor : this.props.color,
      fontSize : this.props.fontSize
    }
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color: {this.props.color} - FontSize : {this.props.fontSize}px</p>
        <div id="content" style={this.setColor()}>
          Xin chao
        </div>
      </div>
    );
  }
}

export default Results;
