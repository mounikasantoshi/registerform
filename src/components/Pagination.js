import React from "react";

export default function Pagination({ totalPages, paginate, currentPage }) {
  const pagenumbers = [];
  for (let i = 1; i < Math.ceil(totalPages) + 1; i++) {
    pagenumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-lg">
        {pagenumbers.map((number) => (
          <li className="page-item" key={number}>
            <a
              className={
                currentPage === number ? "active page-link" : "page-link"
              }
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
