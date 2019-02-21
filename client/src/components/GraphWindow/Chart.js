import React, {Component} from 'react';
import './Chart.css'
import {Line} from 'react-chartjs-2';
// import '../../../../models'
import API from '../../utils/API.js'

class Chart extends Component {
    constructor(props){
        super(props);
        this.state={chartData:{}}
    }
    // fires after successful mount
    componentDidMount(){
        API.getHistory(746)
        .then(response => {
            console.log(response.data.chartData);
            this.setState({chartData:response.data.chartData});
        })
    }
    render(){
        return(
            <div className="Chart col s12">
               <h2>Graph Name</h2>
                <Line
                    data={this.state.chartData}
                    options={{}}
                />

            </div>
        )
    }
}
export default Chart; 