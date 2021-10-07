const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;
const _ = require("lodash");
//dummy data
const books = [
  { name: "name of the wind", genre: "Fantasy", id: "1" },
  { name: "the final Empire ", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];
const Authors = [
  { name: "patrik rothufs", age: 44, id: "1" },
  { name: "brandon senderson", age: 42, id: "2" },
  { name: "Terry Pratchett", age: 66, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const Author = new GraphQLObjectType({
  name: "author",
  fields: () => ({
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
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
    author: {
      type: Author,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(Authors, { id: args.id });
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
