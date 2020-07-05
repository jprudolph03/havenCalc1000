import React, {Component} from 'react';

class MathComponent extends Component{
  render(){

    return(
      <div class="MathComponent six columns">
        <p>PartLength:{this.props.partLength}</p>
        <p>LongBar Length: {this.props.lbLength}</p>
        <p>Whole Parts: {parseInt(this.props.lbLength / this.props.partLength)}</p>
        <p>Projected Offall: {(.125 * parseInt(this.props.lbLength / this.props.partLength))+(this.props.lbLength % this.props.partLength)}</p>
      </div>
    )
  }
}

export default MathComponent;


//14.24
//3.75
//1.75
