import React, {Component} from 'react';
import './Chart.css'
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['B', 'W', 'S', 'L', 'C', 'NB'],
                datasets:[
                    {
                        label:'Boots',
                        borderColor:'rgba(255, 102, 102, 0.6)',
                        backgroundColor:'rgba(255, 102, 102, 0.6)',
                        data:[
                            987651,
                            123456,
                            675467,
                            768576,
                            876598,
                            567456
                        ],
                        yAxisId:'y-axis-1',
                    }, {
                        label:'Hat',
                        borderColor:'rgba(204, 153, 255, 0.6)',
                        backgroundColor:'rgba(204, 153, 255, 0.6)',
                        data:[
                            187651,
                            123456,
                            175467,
                            268576,
                            276598,
                            367456
                        ],
                        yAxisId:'y-axis-2',
                    }
                ]
            }
        }
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