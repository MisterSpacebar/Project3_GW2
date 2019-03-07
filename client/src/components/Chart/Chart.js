import React  from 'react';
import './Chart.css'
import {Line} from 'react-chartjs-2';


 const chart = (props) => {
        return(
            <div className="Chart col s12">
                <Line
                    data={props.chartdata}//lowercase is to fix error for case sensetive html props
                    options={{}}
                />

            </div>
        )
    }
//}
export default chart;