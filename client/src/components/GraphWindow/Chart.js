import React, {Component} from 'react';
import './Chart.css'
import {Line} from 'react-chartjs-2';
// import '../../../../models'
import API from '../../utils/API.js'

class Chart extends Component {
    constructor(props){
        super(props);
        this.state={
            id: 90011,
            name: "",
            img:"",
            chartData:{}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // fires after successful mount
    componentDidMount(){
        
    }
    componentDidUpdate(){

    }
    handleSubmit(e){
        e.preventDefault();
        const value = this.state.id

        API.getHistory(value)
        .then(response => {
            console.log(response.data.data);
            console.log(response.data.chartData);
            // this.setState({chartData:response.data.chartData});
            console.log(response.data.name);
            // this.setState({name:response.data.name});
            // this.setState({img:response.data.icon});
            this.setState({
                chartData:response.data.chartData,
                name:response.data.name,
                img:response.data.icon
            });
        })
    };
    handleChange(e){
        e.preventDefault();
        const target = e.target;
        const value = target.value;

        this.setState({
            id: value
        })
    };
    render(){
        return(
            <div className="Chart col s12">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name="serach" value={this.state.id} onChange={this.handleChange} />
                    <input type="submit" name="searchButton" value="Submit" />
                </form>
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