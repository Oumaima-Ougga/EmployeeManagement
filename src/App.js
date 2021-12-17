import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponenet from './components/ListEmployeeComponenet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
        <Switch>
        <Route exact path="/" component={ListEmployeeComponenet}></Route>
        <Route path="/employees" component={ListEmployeeComponenet}></Route>  
        <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
        <Route path ="/view-employee/:id" component={ViewEmployeeComponent}></Route>
      </Switch>   
      
    </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
