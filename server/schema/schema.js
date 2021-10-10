const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;
const _ = require("lodash");
//dummy data
const books = [
  { name: "name of the wind", genre: "Fantasy", id: "1", authorid: "1" },
  { name: "the final Empire ", genre: "Fantasy", id: "2", authorid: "2" },
  { name: "The fault in our star", genre: "Romance", id: "3", authorid: "2" },
  {
    name: "The seven habits ofhighly effective people",
    genre: "Selfdev",
    id: "4",
    authorid: "3",
  },
  { name: "atomic habits", genre: "selfDev", id: "5", authorid: "1" },
  { name: "the way of successs", genre: "selfdev", id: "6", authorid: "3" },
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
    author: {
      type: Author,
      resolve(parent, args) {
        return _.find(Authors, { id: parent.authorid });
      },
    },
  }),
});

const Author = new GraphQLObjectType({
  name: "author",
  fields: () => ({
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorid: parent.id });
      },
    },
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
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
