import React from 'react';





const Colors = [
  {
    id: 1,
    name: 'red',
    value: 'Red'
  },{
    id: 2,
    name: 'green',
    value: 'Green'
  },{
    id: 3,
    name: 'blue',
    value: 'Blue'
  },{
    id: 4,
    name: 'grey',
    value: 'Grey'
  }
]




class ColorSelector extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      colorVal: '',
    };

    this.handlerColSel = this.handlerColSel.bind(this);
  }

  handlerColSel(value){

      this.setState({
        colorVal: value,
      });

  }

  render(){

    var textColorStyle = {
      color: this.state.colorVal,
    };

    return(
      <div>

          <Selector onClickedradioBtnColor = {this.handlerColSel} />
          <textarea style={textColorStyle}></textarea>

      </div>
    );
  }

}


class Selector extends React.Component {
  constructor(props) {
    super(props);

    this.onClickProp = props.onClick;

    this.radioBtnClickHandler = this.radioBtnClickHandler.bind(this);
  }



  radioBtnClickHandler(e)
  {
    this.props.onClickedradioBtnColor(e.target.value);
  }


  render(){
    return(
      <div>
        <ul className="colors-list">

            {
              Colors.map(function(el){
                return <div key={el.id}>
                          <input  id="green" className="color-sel" type="radio"
                            name="color-group" value={el.value} onClick={this.radioBtnClickHandler}></input>
                          <label htmlFor="green">{el.name}</label>
                      </div>;
              }, this)
            }

        </ul>

      </div>
    );
  }

}







export default ColorSelector;
