import React, { Component } from "react";
import { Modal, InputGroup, FormControl, Button } from "react-bootstrap";

export class Form extends Component {
  // addDetails = () => {
  //   this..open();
  // };
  render() {
    return (
      <div className="container gap">
        <div className="App">
          <br />
          <button onClick={this.props.open} className="btn btn-primary">
            <i class="fas fa-user-plus pr-2 "></i>
            Add Details
          </button>
        </div>
        <br />

        {/* <div>
          
          <input
            value={this.props.search}
            onChange={this.props.onSearch}
            type="text"
            placeholder="Search.."
            name="search"
          />

          {/* <button type="submit">search</button> */}
        {/* </div> */}
        <div className="flex">
          <form className="flex">
            <div className="row">
              <div className="col-md-7">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      UsersList
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    value={this.props.search}
                    onChange={this.props.onSearch}
                    type="text"
                    placeholder="Search here..."
                    name="search"
                    aria-label="Default"
                    // aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </div>
              <div className="col-md-5">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Users Per Page
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <select onChange={this.props.onCount} class="form-control">
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                  {/* <FormControl
                    value=
                    // value="3"
                    onChange={this.props.onCount}
                    min="1"
                    max="5"
                    type="number"
                    placeholder="default:3 | range(1-50)"
                    name="search"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  /> */}
                  <Button
                    onClick={this.props.onUsersPerPage}
                    value={this.props.count}
                  >
                    Submit
                  </Button>
                </InputGroup>
              </div>
            </div>
          </form>
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
              <div class="form-group row ">
                <label class="col-sm-3 col-form-label">First name</label>
                <div class="col-sm-9">
                  <input
                    onChange={this.props.firstName}
                    type="text"
                    value={this.props.data.firstName}
                    className="form-control media"
                  />
                  <p className="error">
                    {this.props.errors.firstName
                      ? "*please enter the field"
                      : ""}
                  </p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Last Name</label>
                <div class="col-sm-9">
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
                <label class="col-sm-3 col-form-label">Age</label>
                <div class="col-sm-9">
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
                  <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input
                        onChange={this.props.gender}
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="female"
                        checked={this.props.data.gender === "female"}
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
                        checked={this.props.data.gender === "male"}
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
