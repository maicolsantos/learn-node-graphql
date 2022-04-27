import { ApolloServer, gql } from 'apollo-server'

import { categories, products } from '../db'

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!!',
    products: () => products,
    product: (parent: any, args: { id: string }, context: any) => {
      const { id } = args

      return products.find(product => product.id === id)
    },
    categories: () => categories,
    category: (parent: any, args: { id: string }, context: any) => {
      const { id } = args

      return categories.find(category => category.id === id)
    },
  },
  Category: {
    products: (parent: any, args: any, context: any) => {
      return products.filter(product => product.categoryId === parent.id)
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
