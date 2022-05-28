"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const apollo_server_1 = require("apollo-server");
exports.City = (0, apollo_server_1.gql) `
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
`;
