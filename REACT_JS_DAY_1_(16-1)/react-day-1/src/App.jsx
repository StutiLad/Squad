import React, { Component } from 'react'
import Nav from './components/Nav'
import Func from './components/Func'
import Content from './components/Content'
import Parent from './components/Parent'


export default class App extends Component {

  render() {
    return (
      <>
        <Nav />
        <Func name='Stuti'/>
        <Content name='learner'/>
        <Parent />
      </>
    )
  }
}
