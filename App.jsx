import React from 'react';



class ColorSelector extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      var1: 0,
      var2: 0,
      result: 0
    };


    this.textLabels = {
      expres: "Expression",
      operator: "OP",
      equal: "=",
      add: "+",
      sub: "-",
      mult: "*"
    };

    // this.getVar1Handler = this.getVar1Handler.bind(this);

  }

  divStyle : {
    display: "inline-block",

  }

  handlerColSel(evnt){
    console.log("Handler color");
  }



  render(){
    return(
      <div style={this.divStyle}>

          <Selector onClick={this.handlerColSel} />
          <textarea className="textarea">ia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</textarea>



      </div>
    );
  }

}



class Selector extends React.Component {
  constructor(props) {
    super(props);

  }






  render(){



    return(
      <div className="div-color-sel" >
          <div>
            <input id="red" className="color-sel" type="radio" name="color-group" value="Red"  onClick={this.props.onClick}></input>
            <label for="red">Red</label>
          </div>
          <div>
            <input  id="green" className="color-sel" type="radio"  name="color-group" value="Green" onClick={this.props.onClick}></input>
            <label for="green">Green</label>
          </div>

      </div>
    );
  }

}





export default ColorSelector;
