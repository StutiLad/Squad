/*  Condition Rendering
    if/else statements
    element variables 
    ternary conditional operation 
    short circuit operator 
*/

import React, { Component } from 'react'

class ConditionRender extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {


        // Ternary operation

        return this.state.isLoggedIn ? (<div className="text-center">Welcome Stuti by Ternary</div>) : <div className="text-center">Welcome Guest</div>

        /*
        
        // short circuit operator 
         return this.state.isLoggedIn && <div className="text-center">Welcome Stuti by Short circuit</div>

         // if-else statement 
        if (this.state.isLoggedIn) {
            return <div className="text-center" >Welcome Stuti by if-else</div>
        } else {
            return <div className="text-center">Welcome Guest by if-else</div>
        }

        // element variables
        let greet
        if (this.state.isLoggedIn) {
            greet = <div className="text-center">Welcome Stuti by variable</div>
        } else {
            greet = <div className="text-center">Welcome Guest by variable</div>
        }
        
         */

    }
}

export default ConditionRender

