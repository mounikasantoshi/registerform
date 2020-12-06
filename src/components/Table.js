import React, { Component } from "react";

const Table = (props) => {
  const onDelete = (e) => {
    props.delete(e.target.id);
  };

  const onUpdate = (e) => {
    props.update(e.target.id);
  };

  return (
    <div className="container">
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-head">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((v, i) => (
            <tr key={i}>
              <td>
                {i + 1}
                {"."}
              </td>
              <td>{v.firstname}</td>
              <td>{v.lastname}</td>
              <td>{v.age}</td>
              <td>{v.gender}</td>
              <td>
                <button id={i} onClick={onUpdate} className="btn btn-danger">
                  Update
                </button>
              </td>
              <td>
                <button id={i} onClick={onDelete} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
