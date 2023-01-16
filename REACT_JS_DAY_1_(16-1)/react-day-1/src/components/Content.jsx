import React, { Component } from 'react'

export default class Content extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            count: 0
        }

        // bind event handler - approch 3rd
        // this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    // 4th approch - create arrow function

    /* increment = () =>{
         this.setState({
             count: this.state.count + 1,
         })
     } */

    render() {
        return (
            <>
                <div className="text-center">
                    <p>Welcome, <b>{this.props.name}</b></p>
                    <p>I'm Class Component with props</p>
                    <p>Today is {new Date().toLocaleDateString()}</p>
                    <p className='time'>Currently, It's {this.state.time}</p>
                </div>
                <div className="text-center">
                    <h5 className='text-decoration-underline text-primary'><b>state & setState</b></h5>
                    <p>Counter update on click</p>
                    <div className="count">
                        <p>Count - {this.state.count}</p>
                        {/* Binding event handler */}

                        {/* 1st approch - arrow function  */}
                        <button className='btn btn-outline-dark' onClick={() => this.increment()}>Increment</button>

                        {/* 2nd approch - bind this */}
                        {/* <button className='btn btn-outline-dark' onClick={this.increment.bind(this)}>Increment</button> */}

                        {/* 3rd approch - in constructor} - MOSTLY USED */}
                        {/* <button className='btn btn-outline-dark' onClick={this.increment}>Increment</button> */}

                    </div>
                </div>
            </>
        )
    }
}

