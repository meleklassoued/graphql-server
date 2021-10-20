import React from "react";

import { gql, useQuery } from "@apollo/client";
const getBooksList = gql`
  {
    books {
      name
      id
    }
  }
`;
function Booklist() {
  const { loading, error, data } = useQuery(getBooksList);
  if (loading) return "loading";
  if (error) return `Error ${error.message}`;

  return (
    <div>
      <ul id='book-list'>
        {data.books.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Booklist;
