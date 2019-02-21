
// charts.js structure
// -----------------------------
labels: [],
    datasets: [
        {
            // item name
            label: 'Boots',
            // line colour
            borderColor: 'rgba(255, 102, 102, 0.6)',
            // line bg colour
            backgroundColor: 'rgba(255, 102, 102, 0.6)',
            data: [
            ],
            yAxisId: 'y-axis-1',
        }, {
            // item name
            label: 'Hat',
            // line colour
            borderColor: 'rgba(204, 153, 255, 0.6)',
            // line bg colour
            backgroundColor: 'rgba(204, 153, 255, 0.6)',
            data: [
            ],
            yAxisId: 'y-axis-2',
        }
    ]
// -----------------------------
// function to return and structure date and unit price from original json return
// -----------------------------
API.getHistory(83935).then(res => {
    res.data.buying.map(obj => {
        this.setState(state => ({
            chartData: {
                ...state.chartData,
                labels: state.chartData.labels.concat(new Date(obj.listing_datetime).toLocaleString('en-us', { month: 'short', day: 'numeric' }))

            }
        }))

        const dataSetsCopy = this.state.chartData.datasets.slice(0);

        const dataCopy = dataSetsCopy[0].data.slice(0);
        console.log(dataCopy);
        dataSetsCopy[0].data = dataCopy.concat(obj.unit_price);

        this.setState({
            data: Object.assign({}, this.state.data, {
                datasets: dataSetsCopy
            })
        });
    })
})