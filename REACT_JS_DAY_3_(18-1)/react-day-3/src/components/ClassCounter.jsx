import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="text-center">
        <p>ClassCounter</p>
        <div>
            <button className="btn btn-outline-dark" onClick={this.incrementCount}> Count {this.state.count}</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
