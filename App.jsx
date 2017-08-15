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
        <div className="text-cont">
          <Selector onClick={this.handlerColSel} />
          <textarea>ia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</textarea>
        </div>


      </div>
    );
  }

}



class Selector extends React.Component {
  constructor(props) {
    super(props);

  }


  handlerSel(evn){
    console.log("Handler Selector");
  }


  render(){
    return(
      <div>
        <input type="checkbox" checked="checked" onClick={this.props.onClick}></input>
      </div>
    );
  }

}





export default ColorSelector;
