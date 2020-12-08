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
    data: { firstname: "", lastname: "", age: "", gender: "" },
    currentid: "",

    errors: { firstname: "", lastname: "", age: "", gender: "" },
  };

  firstname = (e) => {
    this.setState({
      data: { ...this.state.data, firstname: e.target.value },
      errors: { ...this.state.errors, firstname: false },
    });
  };

  lastname = (e) => {
    this.setState({
      data: { ...this.state.data, lastname: e.target.value },
      errors: { ...this.state.errors, lastname: false },
    });
  };

  age = (e) => {
    this.setState({
      data: { ...this.state.data, age: e.target.value },
      errors: { ...this.state.errors, age: false },
    });
  };

  gender = (e) => {
    this.setState({
      data: { ...this.state.data, gender: e.target.value },
      errors: { ...this.state.errors, gender: false },
    });
  };

  delete = (id) => {
    this.setState({
      list: this.state.list.filter((details, i) => i != id),
    });
  };

  edit = (e) => {
    this.setState({
      currentid: e.target.id,
      data: {
        firstname: this.state.list[e.target.id].firstname,
        lastname: this.state.list[e.target.id].lastname,
        age: this.state.list[e.target.id].age,
        gender: this.state.list[e.target.id].gender,
      },
    });
  };

  validate = () => {
    this.setState({
      errors: {
        firstname: this.state.data.firstname == "",
        lastname: this.state.data.lastname == "",
        age: this.state.data.age == "",
        gender: this.state.data.gender == "",
      },
    });
    return (
      this.state.data.firstname != "" &&
      this.state.data.lastname != "" &&
      this.state.data.age != "" &&
      this.state.data.gender != ""
    );
  };

  click = (e) => {
    e.preventDefault();

    if (this.validate()) {
      if (this.state.currentid == "") {
        this.setState({ list: [...this.state.list, this.state.data] });

        this.setState({
          data: { firstname: "", lastname: "", age: "", gender: "" },
        });
      } else {
        const newlist = this.state.list.map((person, i) => {
          if (i == this.state.currentid) {
            return this.state.data;
          } else {
            return person;
          }
        });
        this.setState({
          list: newlist,
          currentid: "",
          data: { firstname: "", lastname: "", age: "", gender: "" },
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Form
          click={this.click}
          firstname={this.firstname}
          lastname={this.lastname}
          age={this.age}
          gender={this.gender}
          data={this.state.data}
          errors={this.state.errors}
        />
        <Table list={this.state.list} delete={this.delete} edit={this.edit} />
      </div>
    );
  }
}

export default Register;
