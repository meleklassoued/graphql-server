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
export { getAuthrosQuery, getBooksList };
