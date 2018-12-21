const { GraphQLServer } = require("graphql-yoga");


let messages = [{
  id: 'msg-01',
  message: 'Test message',
  user: 'Pablos'
}]
let idCount = messages.length;

// 2
const resolvers = {
  Query: {
    info: () => `SlackLikeApp`,
    feed: () => messages,
  },
  Mutation: {
    post: (parent, args) => {
      const message = {
        id: `msg-${idCount++}`,
        message: args.message,
        user: args.user
      }
      messages.push(message)
      return message
    }
  },
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
