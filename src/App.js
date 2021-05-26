import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import History from './components/History';
import Vision from './components/Vision';
import Goals from './components/Goals';
import Buttons from './components/Buttons';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            active: true,
            categories: ['history', 'vision', 'goals']
        }
    }

    toggleClass = () => {
        this.setState({active: false})
    }
    render(){
        const {active, categories} = this.state;
        // const buttons = categories.map(btn=>{
        //     return (
        //         <Link to='/'>
        //             <button className={active} onClick={()=>this.toggleClass()}>{btn}</button>
        //         </Link>
        //     )
        // })
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
                        {/* <div className="buttons"> */}
                            <Buttons />
                        {/* </div> */}
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
