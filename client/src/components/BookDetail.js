import React from "react";
import "../index.css";
import { useQuery } from "@apollo/client";
/* ------------------------------ import QUERY ------------------------------ */
import { getBookQuery } from "../graphql/Queries/query";
/* ------------------------------ finish import QUERY ------------------------------ */

function BookDetail({ BookId }) {
  // eslint-disable-next-line no-undef
  //   const Id = BookId;
  // console.log({ BookId });
  // console.log("aslema");
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: BookId,
    },
  });
  if (loading) {
    console.log(loading);
    return <h1>loading</h1>;
  }
  if (error) {
    console.log(error);
    return `error ${error.message}`;
  }

  return (
    <div id='book-details'>
      <p>out book Details here </p>
      <h2>{data.book.name}</h2>
      <ul className='other-books'>
        {data.book.author.books.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default BookDetail;
