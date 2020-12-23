import React, { Component } from "react";

const Table = (props) => {
  const onDelete = (e) => {
    props.delete(e.target.id);
  };

  // const onUpdate = (e) => {
  //   props.update(e.target.id);
  // };

  const { search, users } = props;
  const filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase()) ||
      user.age.toLowerCase().includes(search.toLowerCase()) ||
      user.gender.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container">
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-head">
          <tr>
            <th scope="col">#</th>
            <th onClick={() => props.userSort("firstName")} scope="col">
              First Name
            </th>
            <th onClick={() => props.userSort("lastName")} scope="col">
              Last Name
            </th>
            <th onClick={() => props.userSort("age")} scope="col">
              Age
            </th>
            <th onClick={() => props.userSort("gender")} scope="col">
              Gender
            </th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((v, i) => (
            <tr key={i}>
              <td>
                {i + 1}
                {"."}
              </td>
              <td>{v.firstName}</td>
              <td>{v.lastName}</td>
              <td>{v.age}</td>
              <td>{v.gender}</td>
              <td>
                <button
                  id={v._id}
                  value={i}
                  onClick={props.edit}
                  className="btn btn-danger"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  id={v._id}
                  onClick={onDelete}
                  className="btn btn-danger"
                >
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
