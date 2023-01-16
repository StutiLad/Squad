import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor(){
    super()
    this.state = {
      message : 'Hello Parents....!'
    }
    this.greet = this.greet.bind(this)
  }

  greet(childName){
    this.setState({
      message: alert(`${this.state.message} from ${childName}`)
    })
  }

  render() {
    return (
      <div className='text-center mt-3'>
        <h5 className='text-decoration-underline text-primary'><b>pass method as a props</b></h5>
        <Child greetEvent={this.greet} />
      </div>
    )
  }
}
