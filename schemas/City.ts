import { gql } from 'apollo-server'

export const City = gql`
    type City {
        id: Int!
        slug: String!
        name: String!
        people: Int!
        planet: Int!
        profit: Int!
        overall: Int!
        country: String!
        continent: String!
    }
    type Query {
        allCities: [City!]!
        getCity(slug: String!): City
    }
`
