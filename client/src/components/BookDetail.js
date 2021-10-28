import React from "react";
import { useQuery } from "@apollo/client";
/* ------------------------------ import QUERY ------------------------------ */
import { getBookQuery } from "../graphql/Queries/query";
/* ------------------------------ finish import QUERY ------------------------------ */

function BookDetail({ BookId }) {
  // eslint-disable-next-line no-undef
  //   const Id = BookId;
  const DispatchBook = () => {
    console.log({ BookId });
    console.log("aslema");
    const { loading, error, data } = useQuery(getBookQuery, {
      variables: {
        id: BookId,
      },
    });
    if (loading) return <h1>loading</h1>;
    if (error) return `error ${error.message}`;
    return <h2>{data.book.name}</h2>;
   
  };

  return (
    <div id='book-detail'>
      <p>out book Details here </p>
      <div>{DispatchBook()}</div>
    </div>
  );
}

export default BookDetail;
