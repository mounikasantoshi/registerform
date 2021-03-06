import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";
import axios from "axios";
import { connect } from "react-redux";
import personsList from "./redux/reducers/PersonsList";
import { getUsers } from "./redux/actions/persons";

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
    // users: [],
    data: { firstName: "", lastName: "", age: "", gender: "" },
    currentid: "",

    errors: { firstName: "", lastName: "", age: "", gender: "" },
    modalShow: false,
    search: "",
    count: "",
    usersPerPage: 3,
    currentPage: 1,
    direction: { firstName: "asc", lastName: "asc", age: "asc", gender: "asc" },
  };
  // getusers = () => {
  //   axios.get("/persons").then((res) => {
  //     this.setState({ users: res.data });
  //     // console.log(this.state.users);
  //   });
  // };

  componentDidMount() {
    this.props.getUsers();
  }

  close = () => {
    this.setState({
      modalShow: false,
      data: { firstName: "", lastName: "", age: "", gender: "" },
      currentid: "",
    });
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

  onUsersPerPage = () => {
    this.setState({
      usersPerPage: this.state.count,
      count: "",
      currentPage: 1,
    });
  };

  onCount = (e) => {
    this.setState({ count: e.target.value });
    // if (e.target.value <= 0) {
    //   this.setState({ count: 1 });
    // } else if (e.target.value >= 5) {
    //   this.setState({ count: 5 });
    // } else {
    //   this.setState({ count: Math.ceil(e.target.id) });
    // }
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
      users: this.state.users.filter((details) => details._id !== id),
    });
    console.log(this.state.users);
  };

  edit = (e) => {
    this.setState({
      modalShow: true,
      currentid: e.target.id,
      data: {
        firstName: this.state.users.find((user) => user._id === e.target.id)
          .firstName,
        lastName: this.state.users.find((user) => user._id === e.target.id)
          .lastName,
        age: this.state.users.find((user) => user._id === e.target.id).age,
        gender: this.state.users.find((user) => user._id === e.target.id)
          .gender,
      },
    });
    console.log(e.target.id);
  };

  ageSort = () => {
    const users = this.state.users;
    this.setState({
      users: users.sort((a, b) =>
        this.state.direction.age === "asc"
          ? Number(a.age) - Number(b.age)
          : Number(b.age) - Number(a.age)
      ),
      direction: {
        age: this.state.direction.age === "asc" ? "dec" : "asc",
      },
    });
  };

  userSort = (name) => {
    const users = this.state.users;
    this.setState({
      users: users.sort((a, b) =>
        this.state.direction[name] === "asc"
          ? a[name].toString().localeCompare(b[name].toString())
          : b[name].toString().localeCompare(a[name].toString())
      ),
      direction: {
        [name]: this.state.direction[name] === "asc" ? "dec" : "asc",
      },
    });
  };

  validate = () => {
    this.setState({
      errors: {
        firstName: this.state.data.firstName === "",
        lastName: this.state.data.lastName === "",
        age: this.state.data.age === "",
        gender: this.state.data.gender === "",
      },
    });
    return (
      this.state.data.firstName !== "" &&
      this.state.data.lastName !== "" &&
      this.state.data.age !== "" &&
      this.state.data.gender !== ""
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
      if (this.state.currentid === "") {
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

  firstPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: 1 });
    }
  };

  previousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  render() {
    console.log(this.props.users);
    const { search, usersPerPage, currentPage } = this.state;
    const { users } = this.props;
    const filteredUsers = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.age.toLowerCase().includes(search.toLowerCase()) ||
        user.gender.toLowerCase().includes(search.toLowerCase())
      );
    });

    const lastIndex = this.state.currentPage * this.state.usersPerPage;
    const firstIndex = lastIndex - this.state.usersPerPage;
    const currentUsers = filteredUsers.slice(firstIndex, lastIndex);
    const totalPages = filteredUsers.length / usersPerPage;

    const nextPage = () => {
      if (this.state.currentPage < Math.ceil(totalPages)) {
        this.setState({ currentPage: currentPage + 1 });
      }
    };

    const lastPage = () => {
      if (this.state.currentPage < Math.ceil(totalPages)) {
        this.setState({ currentPage: Math.ceil(totalPages) });
      }
    };

    const paginate = (pagenumber) => {
      this.setState({ currentPage: pagenumber });
    };

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
          usersPerPage={this.state.usersPerPage}
          onUsersPerPage={this.onUsersPerPage}
          count={this.state.count}
          onCount={this.onCount}
        />
        <Table
          users={this.state.users}
          delete={this.delete}
          edit={this.edit}
          userSort={this.userSort}
          search={this.state.search}
          currentUsers={currentUsers}
          ageSort={this.ageSort}
          currentPage={this.state.currentPage}
          usersPerPage={this.state.usersPerPage}
          totalPages={totalPages}
          previousPage={this.previousPage}
          nextPage={nextPage}
          lastPage={lastPage}
          firstPage={this.firstPage}
          paginate={paginate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // personsList: state.personsList;
  users: state.personList.users,
});

export default connect(mapStateToProps, { getUsers })(Register);
