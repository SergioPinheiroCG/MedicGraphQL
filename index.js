const db = require("./database/db.js");
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const schema = require('./schemas/schema.js');  // Aqui você já está importando os typeDefs
const resolvers = require('./resolvers/resolver.js');

const app = express();

// Criando o schema executável
const executableSchema = makeExecutableSchema({
  typeDefs: schema.typeDefs,  // Aqui você passa o typeDefs de schema.js
  resolvers,  // E também os resolvers
});

// Configuração do Apollo Server
const server = new ApolloServer({
  schema: executableSchema, // Passando o schema executável
});

const startServer = async () => {
  // Inicia o Apollo Server
  await server.start();

  // Configuração do endpoint GraphQL
  server.applyMiddleware({ app });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor GraphQL rodando em http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();