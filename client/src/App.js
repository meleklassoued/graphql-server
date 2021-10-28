import React from "react";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
import "../src/index.css";
/* -------------------------------------------------------------------------- */
/*                              import components                             */
/* -------------------------------------------------------------------------- */
import Booklist from "./components/Booklist";
import AddBook from "./components/AddBook";

/* -------------------------------------------------------------------------- */
/*                              import components                             */
/* -------------------------------------------------------------------------- */
//appolo client setup
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div id='main'>
          <h1> Melek's Reading List</h1>
          <Booklist />
          <AddBook />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
