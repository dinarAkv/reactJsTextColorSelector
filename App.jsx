import React from 'react';



class ColorSelector extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      colorName: '',
    };

    this.handlerColSel = this.handlerColSel.bind(this);
  }

  handlerColSel(e){
    console.log("Color: " + e.target.value);

    this.setState({
      colorName: e.target.value
    });
  }

  render(){
    return(
      <div>

          <Selector onClick={this.handlerColSel} />
          <ColoredText color={this.state.colorName} />

      </div>
    );
  }

}




class ColoredText extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){

      var textNewStyle = {
        color: this.props.color,
      };

      return(
        <div>
          <textarea style={textNewStyle}>This is textarea </textarea>
        </div>
      );
    }

}



class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.textLabels = {
        red: "Red",
        green: "Green",
        blue: "Blue"
    };

    this.colorsVal = {
      red: "red",
      green: "green",
      blue: "blue",
    };
  }



  render(){
    return(
      <div>
          <div>
            <input id="red" className="color-sel" type="radio" name="color-group" value={this.colorsVal.red} onClick={this.props.onClick}></input>
            <label for="red">{this.textLabels.red}</label>
          </div>
          <div>
            <input  id="green" className="color-sel" type="radio"  name="color-group" value={this.colorsVal.green} onClick={this.props.onClick}></input>
            <label for="green">{this.textLabels.green}</label>
          </div>
          <div>
            <input  id="blue" className="color-sel" type="radio"  name="color-group" value={this.colorsVal.blue} onClick={this.props.onClick}></input>
            <label for="blue">{this.textLabels.blue}</label>
          </div>
      </div>
    );
  }

}





export default ColorSelector;
