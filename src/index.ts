import { ApolloServer } from 'apollo-server'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { categories, products, reviews } from '../db'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    categories,
    products,
    reviews,
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
