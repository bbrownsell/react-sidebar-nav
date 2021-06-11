import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/reports" component={Reports}/>
          <Route path="/products" component={Products}/>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
