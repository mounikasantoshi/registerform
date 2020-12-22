import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export class Form extends Component {
  // addDetails = () => {
  //   this..open();
  // };
  render() {
    return (
      <div className="container gap">
        <button onClick={this.props.open} className="btn btn-primary">
          Add Details
        </button>
        <div>
          <input type="search" placeholder="search...." />
        </div>

        <Modal show={this.props.modalShow} onHide={this.props.close}>
          <Modal.Header>
            <h1>Form Page</h1>
            <button className="btn btn-danger" onClick={this.props.close}>
              x
            </button>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.props.click}>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">First name</label>
                <div class="col-sm-10">
                  <input
                    onChange={this.props.firstName}
                    type="text"
                    value={this.props.data.firstName}
                    class="form-control"
                  />
                  <p className="error">
                    {this.props.errors.firstName
                      ? "*please enter the field"
                      : ""}
                  </p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">lastName</label>
                <div class="col-sm-10">
                  <input
                    onChange={this.props.lastName}
                    value={this.props.data.lastName}
                    type="text"
                    class="form-control"
                  />
                  <p className="error">
                    {this.props.errors.lastName
                      ? "*please enter the field"
                      : ""}
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
                      {this.props.errors.gender
                        ? `*can't select the option`
                        : ""}
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
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Form;
