import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import History from './components/History';
import Vision from './components/Vision';
import Goals from './components/Goals';
import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
        <div className="center">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!</p>
        </div>

        <div className="middle about-center">
            <div className="img-container">
                <img src="https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg" alt=""/>
            </div>
            <div className="section-btn">
                <div className="buttons">
                    <Link to='/' className='active'>History</Link>
                    <Link to='/vision'>Vision</Link>
                    <Link to='/goals'>Goals</Link>
                </div>
                <div id="box">
                    <ul id="wrapper">
                    <Switch>
                      <Route exact path='/' components={History}/>
                      <Route path='/vision' components={Vision}/>
                      <Route path='/goals' components={Goals}/>
                    </Switch>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
