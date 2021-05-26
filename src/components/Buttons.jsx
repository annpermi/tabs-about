import React,{ Component } from "react";
import { NavLink} from "react-router-dom";

class Buttons extends Component {
    constructor(){
        super();
        this.state = {
            click: false
        }
    }

    handleClick = () => {
        const click = this.state.click;
        this.setState({click: !click})
    }

    render(){
        return (
            <div className="buttons">
                <NavLink exact to='/' activeClassName='active' className='left' onClick={this.handleClick}>
                    History
                </NavLink>
                <NavLink to='/vision' activeClassName='active' onClick={this.handleClick}>
                    Vision
                </NavLink>
                <NavLink to='/goals' activeClassName='active' className='right' onClick={this.handleClick}>
                    Goals
                </NavLink>
            </div>
        )
    }
}

export default Buttons;