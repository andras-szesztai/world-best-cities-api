"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schemas_1 = require("../schemas");
const resolvers_1 = require("../resolvers");
const prisma_1 = __importDefault(require("../prisma/prisma"));
const server = new apollo_server_1.ApolloServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    context: () => ({ db: prisma_1.default }),
    introspection: true,
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
      📭  Query at https://studio.apollographql.com/dev
    `);
});
