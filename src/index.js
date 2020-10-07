import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { VictoryChart, VictoryLine, VictoryPie, VictoryTheme, VictoryAxis } from 'victory';

class Table extends React.Component {
  state = {counter: 0, numHeads:0, numTails:0, data:new Array()};
  flipCoin=()=>{
    const headProbability = document.getElementById("headProbability").value;
    this.setState({counter:this.state.counter + 1});
    let result = Math.random()
    if (result <= headProbability) {
      this.setState({numHeads:this.state.numHeads + 1});
    } else {
      this.setState({numTails:this.state.numTails + 1});
    }
    let proportion = this.state.numHeads/this.state.counter
    this.state.data[this.state.counter - 1] = [this.state.counter, proportion]
  }


  render() { 
    return <div>
          <p>
          <button onClick={() => this.flipCoin()} type="button" class="btn btn-secondary btn-lg btn-block">Flip Coin</button>
          </p>
        
       
          <p>
            <div>Coin has been flipped: <b>{this.state.counter} </b> </div>
            <div>Number of Heads: <b>{this.state.numHeads}</b> </div>
            <div>Number of Tails: <b>{this.state.numTails}</b> </div>

          </p>   
          <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1"><b>Head Probability</b></label>
            <select id = "headProbability" class="form-control">
              
              <option selected = "selected">0.5</option>
              <option>0.4</option>
              <option>0.3</option>
              <option>0.2</option>
              <option>0.1</option>


            </select>
         </div>

          </form>
        
          <div style={{ display: "flex", flexWrap: "wrap" }}>
          <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
                      <VictoryLine 
                      data={this.state.data}
                      x = {0}
                      y = {1}
                  />
                   
                </VictoryChart>
                <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
                <VictoryAxis style={{ 
                          axis: {stroke: "transparent"}, 
                          ticks: {stroke: "transparent"},
                          tickLabels: { fill:"transparent"} 
                      }} />
                <VictoryPie
                  data={[
                    { x: "Heads", y: this.state.numHeads/this.state.counter},
                    { x: "Tails", y: 1 - this.state.numHeads/this.state.counter},
                  ]}/> 
                </VictoryChart>
         </div>         
         </div>
   
  }
}
ReactDOM.render(<Table></Table>, document.getElementById("root"));

