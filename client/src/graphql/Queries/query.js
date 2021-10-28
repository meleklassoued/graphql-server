import { gql } from "@apollo/client";
const getAuthrosQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksList = gql`
  {
    books {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getBookQuery, getBooksList, getAuthrosQuery };
