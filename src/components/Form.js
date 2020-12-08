import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div className="container gap">
        <form onSubmit={this.props.click}>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">First name</label>
            <div class="col-sm-10">
              <input
                onChange={this.props.firstname}
                type="text"
                value={this.props.data.firstname}
                class="form-control"
              />
              <p className="error">
                {this.props.errors.firstname ? "*please enter the field" : ""}
              </p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Lastname</label>
            <div class="col-sm-10">
              <input
                onChange={this.props.lastname}
                value={this.props.data.lastname}
                type="text"
                class="form-control"
              />
              <p className="error">
                {this.props.errors.lastname ? "*please enter the field" : ""}
              </p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">age</label>
            <div class="col-sm-10">
              <input
                onChange={this.props.age}
                type="number"
                value={this.props.data.age}
                class="form-control"
              />
              <p className="error">
                {this.props.errors.age ? "*please enter the field" : ""}
              </p>
            </div>
          </div>

          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">gender</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    onChange={this.props.gender}
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="female"
                    checked={this.props.data.gender == "female"}
                  />
                  <label class="form-check-label" for="gridRadios1">
                    female
                  </label>
                </div>

                <div class="form-check">
                  <input
                    onChange={this.props.gender}
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="male"
                    checked={this.props.data.gender == "male"}
                  />
                  <label class="form-check-label" for="gridRadios2">
                    male
                  </label>
                </div>
                <p className="error">
                  {this.props.errors.gender ? `*can't select the option` : ""}
                </p>
              </div>
            </div>
          </fieldset>

          <div class="form-group row">
            <div class="col-sm-10">
              <button
                onClick={this.props.click}
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
