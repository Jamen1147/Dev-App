import { AuthenticationError } from 'apollo-server-express';
import repos from '../../repositories';

const resolver = {
  Query: {
    user: async (parent: any, _: any, ctx: any) => {
      console.log(ctx);
      const users = await repos.user.listAll();
      AuthenticationError;
      return users[0];
    },
    hi: () => 'hello graphql',
  },
};

export default resolver;
