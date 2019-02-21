import React, { Component } from 'react';
import Tappable from 'react-tappable';
import './App.css';
import Loginscreen from './components/Loginscreen'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;

// if(response.data.code == 200){
//   console.log("Login successfull");
//   var uploadScreen=[];
//   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//   }

// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from "./utils/API";
// import Home from "./pages/Home/Home"

// import NavBar from './components/NavBar/NavBar';
// import { Row,Button} from 'react-materialize';


// class App extends Component {
//   state={
//     item:[],
//     id:24
//   }
//   componentDidMount() {
//   };
//   loadItem = id => {
//     console.log('i got id ', id)
//     API.getItem(id)
//       .then(res =>
//         this.setState({ item: res.data.data})
//       )
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div className="mainContainer">
//       <Row>
//         <Router>
//         <div>
//           <NavBar />
//           <Switch>
//             <Route exact path="/" component={Home} />
//             {/* <Route exact path="/user" component={User} />
//             <Route exact path="/about" component={About} /> */}
//           </Switch>
//         </div>
//       </Router>
//       </Row>   
//       <Row>
//           <Button waves='light' onClick={() => this.loadItem(this.state.id)}>Test!</Button>
//           <div>{JSON.stringify(this.state.item)}</div>
//       </Row>
//     </div>
//     );
//   }
// }

// export default App;
