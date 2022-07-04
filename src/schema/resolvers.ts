import merge from 'lodash/merge';
import currency from './currency/resolvers';

const resolvers = merge(
  currency,
);

export default resolvers;
