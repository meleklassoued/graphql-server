import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
/* ------------------------------ import QUERY ------------------------------ */
import { getAuthrosQuery } from "../graphql/Queries/query";
/* ------------------------- FINISH IMPORTING QUERY ------------------------- */
function AddBook() {
  /* ----------------------------------  --------------------------------- */
  const Data = Object.freeze({
    name: "",
    genre: "",
    authorId: "",
  });
  const [State, setState] = useState(Data);

  const handleChange = (e) => {
    setState({
      ...State,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(State);
  };

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
      <form id='add-book' onSubmit={SubmitForm}>
        <div className='field'>
          <label>Book Name: </label>
          <input name='name' type='text' onChange={handleChange} />
        </div>

        <div className='field'>
          <label> Genre </label>
          <input name='genre' type='text' onChange={handleChange} />
        </div>

        <div className='field'>
          <label> Author:</label>
          <select name='authorId' onChange={handleChange}>
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
