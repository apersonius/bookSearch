const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { start } = require('repl');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });

app.get('/', (req, res) => {
  res.sendFild(path.join(__dirname, '../client/.../index.html'));
});
// fix above route

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`api server running on ${PORT}`);
      console.log(`use graphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

startApolloServer();