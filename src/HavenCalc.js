import React, {Component} from 'react';

import MathComponent from './MathComponent';

class HavenCalc extends Component{
  constructor(props){
    super(props);
    this.state = {
      partLength: '',
      lbLength: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    return(
      <div id='havenCalc'>
      <form class="four columns">
        <label>
          Input Part Length:
          <input class="inputWidth" onChange={this.handleChange} value={this.state.partLength} type="number" name="partLength" />
        </label>
        <label>
          Input LongBar Length:
          <input class="inputWidth" onChange={this.handleChange} value={this.state.lgLength} type="number" name="lbLength" />
        </label>
      </form>
        <MathComponent partLength={this.state.partLength} lbLength={this.state.lbLength} />
      </div>
    )
  }
}

export default HavenCalc;
