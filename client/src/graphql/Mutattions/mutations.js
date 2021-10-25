import { gql } from "@apollo/client";

const addBookMutations = gql`
  mutation ($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
export default addBookMutations;
