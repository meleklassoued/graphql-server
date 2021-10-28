import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import "../index.css";
/* ------------------------------ import QUERY and mutations ------------------------------ */
import { getBooksList, getAuthrosQuery } from "../graphql/Queries/query";
import addBookMutations from "../graphql/Mutattions/mutations";

/* ------------------------- FINISH IMPORTING QUERY and Mutations ------------------------- */
function AddBook() {
  /* ----------------------------------  --------------------------------- */
  const Data = Object.freeze({
    name: "",
    genre: "",
    authorId: "",
  });
  const [State, setState] = useState(Data);
  const [addBook] = useMutation(addBookMutations);

  const handleChange = (e) => {
    setState({
      ...State,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name: State.name,
        genre: State.genre,
        authorId: State.authorId,
      },
      refetchQueries: [{ query: getBooksList }],
    });

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
