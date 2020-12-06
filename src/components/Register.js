import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";

export class Register extends Component {
  state = {
    //text: [],
    list: [
      {
        firstname: "mounika",
        lastname: "venkatrao",
        age: 23,
        gender: "female",
      },
    ],
  };

  click = (data) => {
    this.setState({ list: [...this.state.list, data] });
  };
  delete = (id) => {
    this.setState({
      list: this.state.list.filter((details, i) => i != id),
    });
  };
  update = (e) => {
    this.setState({
      firstname: this.state.list[e.target.id].firstname,
    });
  };

  render() {
    return (
      <div>
        <Form click={this.click} />
        <Table
          list={this.state.list}
          delete={this.delete}
          update={this.update}
        />
      </div>
    );
  }
}

export default Register;
