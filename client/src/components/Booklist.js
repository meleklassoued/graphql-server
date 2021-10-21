import React from "react";
import { useQuery } from "@apollo/client";
/* ------------------------------ import QUERY ------------------------------ */
import { getBooksList } from "../graphql/Queries/query";
/* ------------------------------ finish import QUERY ------------------------------ */

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
