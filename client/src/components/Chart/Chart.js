import React  from 'react';
import './Chart.css'
import {Line} from 'react-chartjs-2';
import API from '../../utils/API.js'

 const chart = (props) => {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         id: 90011,
    //         name: "",
    //         img:"",
    //         chartData:{}
    //     };
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    // fires after successful mount
    // componentDidMount(){
        
    // }
    // componentDidUpdate(){
 
    // }
    // handleSubmit(e){
    //     e.preventDefault();
    //     const value = this.state.id

    //     API.getHistory(value)
    //     .then(response => {
    //         console.log(response.data.data);
    //         console.log(response.data.chartData);
    //         // this.setState({chartData:response.data.chartData});
    //         console.log(response.data.name);
    //         // this.setState({name:response.data.name});
    //         // this.setState({img:response.data.icon});
    //         this.setState({
    //             chartData:response.data.chartData,
    //             name:response.data.name,
    //             img:response.data.icon
    //         });
    //     })
    // };
    // handleChange(e){
    //     e.preventDefault();
    //     const target = e.target;
    //     const value = target.value;

    //     this.setState({
    //         id: value
    //     })
    // };
    // render(){
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