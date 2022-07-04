import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    conversionRate(
      base: String
      to: String
    ): Float
  }

  extend type Mutation {
    syncConversionRate(base: String!): Boolean
  }

  type Currency {
    id: ID
    description: String
  }
  type Conversion {
    from: Currency
    to: Currency
    value: Float
  }
`;

export default typeDefs;
