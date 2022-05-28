import { ApolloServer } from 'apollo-server'

import { typeDefs } from './schemas'
import { resolvers } from './resolvers'

import prisma from '../prisma/prisma'

const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers,
    context: () => ({ db: prisma }),
    introspection: true,
})
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
      📭  Query at https://studio.apollographql.com/dev
    `)
})
