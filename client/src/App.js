import React from "react";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
/* -------------------------------------------------------------------------- */
/*                              import components                             */
/* -------------------------------------------------------------------------- */
import Booklist from "./components/Booklist";

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
        <div className='App'>
          <h1> Melek's Reading List</h1>
          <Booklist />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
