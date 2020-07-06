import React, {Component} from 'react';

class MathComponent extends Component{
  render(){

    return(
      <div class="MathComponent six columns">
        <p><strong>PartLength:</strong>{this.props.partLength}</p>
        <p><strong>LongBar Length:</strong> {this.props.lbLength}</p>
        <p><strong>Whole Parts:</strong> {parseInt(this.props.lbLength / this.props.partLength)}</p>
        <p><strong>Lost from Cut:</strong> {(parseInt(this.props.lbLength / this.props.partLength))*.125}</p>
        <p><strong>Min offall Length:</strong> {((parseInt(this.props.lbLength / this.props.partLength))*.125)+2.5}</p>
        <p><strong>Math offall:</strong> {(this.props.lbLength % this.props.partLength).toFixed(3)}</p>
      </div>
    )
  }
}

export default MathComponent;


//14.24
//3.75
//1.75
