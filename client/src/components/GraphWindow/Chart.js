import React, {Component} from 'react';
import './Chart.css'
import {Line} from 'react-chartjs-2';
// import '../../../../models'

class Chart extends Component {
    constructor(props){
        super(props);
        this.state={
            id: 24,
            name: "",
            img:"",
            chartData:{}
        }
    }
    // fires after successful mount
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="Chart col s12">
               <img src={this.state.img}></img>
               <h4>{this.state.name}</h4>
                <Line
                    data={this.state.chartData}
                    options={{}}
                />

            </div>
        )
    }
}
export default Chart; 