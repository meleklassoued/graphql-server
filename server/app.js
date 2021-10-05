const express = require("express");
const graphqlHTTP = require("express-graphql");



const app = express();

app.listen(4000, () => console.log("hello graphql is here"));
