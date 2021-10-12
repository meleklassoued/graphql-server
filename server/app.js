const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://meleklassoued:UMBGlNzzSHgkUW6u@graphql.b09af.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
);
mongoose.connection.once("open", () => {
  console.log("connected to the data base");
});
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  }),
);

app.listen(4000, () => console.log("hello graphql is here"));
