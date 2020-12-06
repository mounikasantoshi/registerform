import React, { Component } from "react";

export class Form extends Component {
  state = {
    data: { firstname: "", lastname: "", age: "", gender: "" },
  };

  firstname = (e) => {
    this.setState({ data: { ...this.state.data, firstname: e.target.value } });
  };

  lastname = (e) => {
    this.setState({
      data: { ...this.state.data, lastname: e.target.value },
    });
  };

  age = (e) => {
    this.setState({ data: { ...this.state.data, age: e.target.value } });
  };

  gender = (e) => {
    this.setState({ data: { ...this.state.data, gender: e.target.value } });
  };

  click = (e) => {
    e.preventDefault();
    if (
      this.state.data.firstname != "" &&
      this.state.data.lastname != "" &&
      this.state.data.age != "" &&
      this.state.data.gender != ""
    ) {
      this.props.click(this.state.data);

      this.setState({
        data: { firstname: "", lastname: "", age: "", gender: "" },
      });
    }
  };
  render() {
    return (
      <div className="container gap">
        <form onSubmit={this.click}>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">First name</label>
            <div class="col-sm-10">
              <input
                onChange={this.firstname}
                type="text"
                value={this.state.data.firstname}
                class="form-control"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Lastname</label>
            <div class="col-sm-10">
              <input
                onChange={this.lastname}
                value={this.state.data.lastname}
                type="text"
                class="form-control"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">age</label>
            <div class="col-sm-10">
              <input
                onChange={this.age}
                type="number"
                value={this.state.data.age}
                class="form-control"
              />
            </div>
          </div>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">gender</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    onChange={this.gender}
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="female"
                    checked={this.state.data.gender == "female"}
                  />
                  <label class="form-check-label" for="gridRadios1">
                    female
                  </label>
                </div>

                <div class="form-check">
                  <input
                    onChange={this.gender}
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="male"
                    checked={this.state.data.gender == "male"}
                  />
                  <label class="form-check-label" for="gridRadios2">
                    male
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div class="form-group row">
            <div class="col-sm-10">
              <button
                onClick={this.click}
                type="submit"
                class="btn btn-primary"
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
