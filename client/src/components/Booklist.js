import React from "react";

import { gql, useQuery } from "@apollo/client";
const getBooksList = gql`
  {
    books {
      name,
      id
    }
  }
`;
function Booklist() {
  const { loading, error, data } = useQuery(getBooksList);
  if (loading) return "loading";
  if (error) return `Error ${error.message}`;
  if (data) console.log(data);

  return (
    <div>
      <ul id='book-list'>
        <li>Book Name</li>
      </ul>
    </div>
  );
}

export default Booklist;
