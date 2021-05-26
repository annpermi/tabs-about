import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import History from './components/History';
import Vision from './components/Vision';
import Goals from './components/Goals';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
    }

    toggleClass = () => {
        console.log()
        // const currentState = this.state.active;
        this.setState({active: false})
    }
    render(){
        const {active} = this.state;
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
                            <Link to='/'>
                                <button className={active ? 'active left' : 'left'} onClick={()=>this.toggleClass()}>History</button>
                            </Link>
                            <Link to='/vision'>
                                <button className={active ? 'active' : ''} onClick={()=>this.toggleClass()}>Vision</button>
                            </Link>
                            <Link to='/goals'>
                                <button className={active ? 'active right' : 'right'} onClick={()=>this.toggleClass()}>Goals</button>
                            </Link>
                        </div>
                        <div id="box">
                            <ul id="wrapper">
                            <Switch>
                              <Route exact path='/' component={History} />
                              <Route path='/vision' component={Vision}/>
                              <Route path='/goals' component={Goals}/>
                            </Switch>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
          );
    }
}

export default App;
