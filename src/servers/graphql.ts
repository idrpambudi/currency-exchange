import { ApolloServer } from 'apollo-server-express';
import graphqlHTTP from 'express-graphql';

export default (app, { schema, context }) => {
  const graphql = new ApolloServer({
    schema,
    context,
    introspection: true
  });

  app.get(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

  graphql.applyMiddleware({
    app
  });
};
