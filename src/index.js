import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { VictoryChart, VictoryLine, VictoryPie, VictoryAxis } from 'victory';

class Table extends React.Component {
  state = {counter: 0, numHeads: 0, numTails:0, data:[{x: 0, y: 0}, {x:1, y:0.5}]};
  flipCoin=()=>{
    const headProbability = document.getElementById("headProbability").value;
    this.setState({counter:this.state.counter + 1});
    let result = Math.random()
    if (result <= headProbability) {
      this.setState({numHeads:this.state.numHeads + 1});
    } else {
      this.setState({numTails:this.state.numTails + 1});
    }
    if (this.state.counter != 0) {
      let proportion = this.state.numHeads/this.state.counter;
      this.state.data.push({x: this.state.counter, y: proportion})
      console.log(this.state.data)
    }
  }


  render() { 
    return <div>
        
       
          
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
          <div class="text-center">
         <button onClick={() => this.flipCoin()} type="button"  class="btn btn-secondary btn-lg">Flip Coin</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
          <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
                      <VictoryLine 
                      data={this.state.data}

                  />
                  <VictoryAxis label="Number of Coin Flips" />
                  <VictoryAxis
                    dependentAxis
                    label="Head Percentage"
                    domain={[0, 1]}
                    style={{
                      axisLabel: { padding: 35},
                      tickLabels: { padding: 5 }
                    }}
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
                   
                    { x: "Heads", y:  (this.state.counter == 0) ? 0.5 : this.state.numHeads/this.state.counter},
                    { x: "Tails", y:(this.state.counter == 0) ? 0.5 : 1 - this.state.numHeads/this.state.counter},
                  ]}/> 
                </VictoryChart>
         </div>       

         </div>
   
  }
}
ReactDOM.render(<Table></Table>, document.getElementById("root"));

