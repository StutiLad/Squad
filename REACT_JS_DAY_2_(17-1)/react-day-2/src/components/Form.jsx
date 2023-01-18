import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      comments: " ",
      topic: "React",
    };
  }
  handleSubmit = (event) => {
    alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleComment = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div>
          <fieldset>
            <legend>Form</legend>
            <form onSubmit={this.handleSubmit}>
              <div className="mt-3">
                <label className="me-2">Name: </label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleName}
                />
              </div>
              <div className="mt-3">
                <label className="me-2">comment: </label>
                <textarea
                  value={this.state.comments}
                  onChange={this.handleComment}
                ></textarea>
              </div>
              <div className="mt-3">
                <label className="me-2">Select: </label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                  <option selected value="react">
                    React
                  </option>
                  <option value="vue">Vue</option>
                  <option value="angular">Angular</option>
                </select>
              </div>
              <div className="mt-3">
                <button type="submit">Submit</button>
              </div>
            </form>
          </fieldset>
        </div>
      </>
    );
  }
}

export default Form;
