import { gql } from "@apollo/client";

const addBookMutations = gql`
  mutation {
    addBook(name: "", genre: "", authorId: ""){
        name
        id

    }
  }
`;
