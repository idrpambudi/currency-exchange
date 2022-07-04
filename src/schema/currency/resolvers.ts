import { MutationResolvers, QueryResolvers } from '../../types/types';

const collection = 'capsule';
const Query: QueryResolvers.Resolvers = {
  conversionRate: async (obj, { base, to }, context) => {
    return context.currencyService.getConversionRate(base, to);
  }
}

const Mutation: MutationResolvers.Resolvers = {
  syncConversionRate: async(obj, { base }, context) => {
    return context.currencyService.syncConversionRate(base);
  }
}

export default { Query, Mutation };
