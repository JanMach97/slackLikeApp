const { GraphQLServer } = require("graphql-yoga");

// 1
const typeDefs = `
type Query {
  info: String!
  feed: [Message!]  
}

type Mutation {
  post(message: Sting!, user: String!) Link!
}

type Message {
  id: ID!,
  message: String!,
  user: String!
}
`;

let messages = [{
  id: 'msg-01',
  message: 'Test message',
  user: 'Pablos'
}]

// 2
const resolvers = {
  Query: {
    info: () => `SlackLikeApp`,
    feed: () => messages,
  },
  Message: {
    id: (parent) => parent.id,
    message: (parent) => parent.message,
    user: (parent) => parent.user
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
