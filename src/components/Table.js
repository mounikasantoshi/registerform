import React from "react";
import Pagination from "./Pagination";
import { Button } from "react-bootstrap";
import { FaSort } from "react-icons/fa";

const Table = (props) => {
  const onDelete = (e) => {
    props.delete(e.target.id);
  };

  const {
    usersPerPage,
    currentUsers,
    currentPage,
    totalPages,
    firstPage,
    previousPage,
    nextPage,
    lastPage,
    paginate,
  } = props;
  // const onUpdate = (e) => {
  //   props.update(e.target.id);
  // };

  return (
    <div className="container App">
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-head">
          <tr>
            <th scope="col">#</th>
            <th onClick={() => props.userSort("firstName")} scope="col">
              First Name
              <FaSort />
            </th>
            <th onClick={() => props.userSort("lastName")} scope="col">
              Last Name
              <FaSort />
            </th>
            <th onClick={() => props.ageSort()} scope="col">
              Age
              <FaSort />
            </th>
            <th onClick={() => props.userSort("gender")} scope="col">
              Gender
              <FaSort />
            </th>
            <th scope="col">Update </th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((v, i) => (
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
                  className="btn btn-primary"
                >
                  <i class="fas fa-user-edit"></i>Edit
                </button>
              </td>
              <td>
                <button
                  id={v._id}
                  onClick={onDelete}
                  className="btn btn-danger"
                >
                  <i class="fas fa-trash-alt"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center container">
        <Button
          variant="link"
          disabled={currentPage === 1 ? true : false}
          onClick={firstPage}
        >
          FirstPage
        </Button>
        <Button
          className="previous"
          variant="link"
          disabled={currentPage === 1 ? true : false}
          onClick={previousPage}
        >
          Previous
        </Button>
        <Pagination
          usersPerPage={usersPerPage}
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
        />
        <Button
          variant="link"
          disabled={currentPage === Math.ceil(totalPages) ? true : false}
          onClick={nextPage}
        >
          Next
        </Button>
        <Button
          variant="link"
          disabled={currentPage === Math.ceil(totalPages) ? true : false}
          onClick={lastPage}
        >
          LastPage
        </Button>
      </div>
    </div>
  );
};

export default Table;
