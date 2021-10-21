import React from "react";
import { gql, useQuery } from "@apollo/client";
const getAuthrosQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook() {
  const DisplayAuthors = () => {
    let { loading, error, data } = useQuery(getAuthrosQuery);
    if (loading) return <option disabled>Loading ...</option>;
    if (error) return `${error.message}`;
    return data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  };

  return (
    <div>
      <form id='add-book'>
        <div className='field'>
          <label>Book Name: </label>
          <input type='text' />
        </div>

        <div className='field'>
          <label> Genre </label>
          <input type='text' />
        </div>

        <div className='field'>
          <label> Author:</label>
          <select>
            <option>select author</option>
            {DisplayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    </div>
  );
}

export default AddBook;
