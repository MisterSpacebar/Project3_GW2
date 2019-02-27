import React, {Component} from 'react';
import './Chart.css';
import API from "../../utils/API";
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['B', 'W', 'S', 'L', 'C', 'NB'],
                id:24,
                datasets:[
                    {
                        label:'Boots',
                        borderColor:'rgba(255, 102, 102, 0.6)',
                        backgroundColor:'rgba(255, 102, 102, 0.6)',
                        data:[],
                        yAxisId:'y-axis-1'}
                    // }, {
                    //     label:'Hat',
                    //     borderColor:'rgba(204, 153, 255, 0.6)',
                    //     backgroundColor:'rgba(204, 153, 255, 0.6)',
                    //     data:[
                    //         187651,
                    //         123456,
                    //         175467,
                    //         268576,
                    //         276598,
                    //         367456
                    //     ],
                    //     yAxisId:'y-axis-2',
                    // }
                ]
            }
        }
    }
    componentDidMount() {
    };
    loadItemHistory = id => {
      console.log('i got data for id ', id)
      API.getHistory(id)
        .then(res =>
          this.setState({ data: res.data.data})
        )
        .catch(err => console.log(err));
    };
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