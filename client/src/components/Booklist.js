import React from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import "../index.css";
/* ------------------------------ import QUERY ------------------------------ */
import { getBooksList } from "../graphql/Queries/query";
import BookDetail from "./BookDetail";
/* ------------------------------ finish import QUERY ------------------------------ */

function Booklist() {
  const [selected, setSelected] = useState([]);
  const { loading, error, data } = useQuery(getBooksList);
  if (loading) return "loading";
  if (error) return `Error ${error.message}`;

  return (
    <div>
      <ul id='book-list'>
        {data.books.map((book) => (
          <li
            key={book.id}
            onClick={(e) => {
              setSelected(book.id);
            }}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetail BookId={selected}></BookDetail>
    </div>
  );
}

export default Booklist;
