const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;
const _ = require("lodash");
const books = [
  { name: "name of the wind", genre: "Fantasy", id: "1" },
  { name: "the final Empire ", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db /other source
        return _.find(books, { id: args.id });
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
