import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";
import axios from "axios";

export class Register extends Component {
  state = {
    //text: [],
    // list: [
    //   // {
    //   //   firstName: "mounika",
    //   //   lastName: "venkatrao",
    //   //   age: 23,
    //   //   gender: "female",
    //   // },
    // ],
    users: [],
    data: { firstName: "", lastName: "", age: "", gender: "" },
    currentid: "",

    errors: { firstName: "", lastName: "", age: "", gender: "" },
    modalShow: false,
    search: "",
    direction: { firstName: "asc", lastName: "asc", age: "asc", gender: "asc" },
  };
  getusers = () => {
    axios.get("/persons").then((res) => {
      this.setState({ users: res.data });
      // console.log(this.state.users);
    });
  };

  componentDidMount() {
    this.getusers();
  }

  close = () => {
    this.setState({ modalShow: false });
  };

  open = () => {
    this.setState({ modalShow: true });
  };

  addDetails = () => {
    return { modalShow: false };
  };

  firstName = (e) => {
    this.setState({
      data: { ...this.state.data, firstName: e.target.value },
      errors: { ...this.state.errors, firstName: false },
    });
  };

  lastName = (e) => {
    this.setState({
      data: { ...this.state.data, lastName: e.target.value },
      errors: { ...this.state.errors, lastName: false },
    });
  };

  onSearch = (e) => {
    this.setState({
      search: e.target.value,
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
    axios.delete(`/persons/${id}`).then((res) => console.log(res.data));
    this.setState({
      users: this.state.users.filter((details) => details._id != id),
    });
    console.log(this.state.users);
  };

  edit = (e) => {
    this.setState({
      modalShow: true,
      currentid: e.target.id,
      data: {
        firstName: this.state.users[e.target.value].firstName,
        lastName: this.state.users[e.target.value].lastName,
        age: this.state.users[e.target.value].age,
        gender: this.state.users[e.target.value].gender,
      },
    });
    console.log(e.target.id);
  };

  userSort = (name) => {
    const users = this.state.users;
    this.setState({
      users: users.sort((a, b) =>
        this.state.direction[name] === "asc"
          ? a[name] < b[name] && -1
          : a[name] > b[name] && -1
      ),
      direction: {
        [name]: this.state.direction[name] === "asc" ? "dec" : "asc",
      },
    });
  };

  validate = () => {
    this.setState({
      errors: {
        firstName: this.state.data.firstName == "",
        lastName: this.state.data.lastName == "",
        age: this.state.data.age == "",
        gender: this.state.data.gender == "",
      },
    });
    return (
      this.state.data.firstName != "" &&
      this.state.data.lastName != "" &&
      this.state.data.age != "" &&
      this.state.data.gender != ""
    );
  };

  pushData = () => {
    axios.post("/persons", this.state.data).then((res) => {
      console.log(this.state.data);
    });
    this.getusers();
  };

  click = (e) => {
    e.preventDefault();

    if (this.validate()) {
      if (this.state.currentid == "") {
        this.pushData();
        this.setState({ users: [...this.state.users, this.state.data] });

        this.setState({
          data: { firstName: "", lastName: "", age: "", gender: "" },
          modalShow: false,
        });
      } else {
        axios
          .patch(`/persons/${this.state.currentid}`, this.state.data)
          .then((res) => {
            // const newlist = this.state.users.map((person, i) => {
            //   if (i == this.state.currentid) {
            //     return res.data;
            //   } else {
            //     return person;
            //   }
            // });
          });
        this.getusers();
        this.setState({
          // data: newlist,
          currentid: "",
          data: { firstName: "", lastName: "", age: "", gender: "" },
          modalShow: false,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Form
          click={this.click}
          firstName={this.firstName}
          lastName={this.lastName}
          age={this.age}
          gender={this.gender}
          data={this.state.data}
          errors={this.state.errors}
          close={this.close}
          open={this.open}
          addDetails={this.addDetails}
          modalShow={this.state.modalShow}
          onSearch={this.onSearch}
          search={this.state.search}
        />
        <Table
          users={this.state.users}
          delete={this.delete}
          edit={this.edit}
          userSort={this.userSort}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default Register;
