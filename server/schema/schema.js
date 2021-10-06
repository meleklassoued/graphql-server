const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {},
  }),
});

const BookType = new GraphQLObjectType({
  name: "book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});
