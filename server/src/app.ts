import express from 'express';
import cors from 'cors';
import config from 'config';
import swaggerSetups from './swagger';

import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolver from './graphql/resolver';

import res from './middlewares/res';
import errorHandler from './middlewares/errorHandler';

import DB from './utils/db';
import { NotFound } from './utils/error';

import userRouter from './routes/user';
import authRouter from './routes/auth';
import profileRouter from './routes/profile';

const app = express();

const run = async () => {
  const port = process.env.PORT || config.server.port;

  await DB.connect();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Custom middlewares
  app.use(res);

  // Docs
  app.use('/api/v1/docs', ...swaggerSetups);

  // Routers
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/profile', profileRouter);

  const server = new ApolloServer({
    typeDefs,
    resolvers: resolver,
    context: ({ req }) => ({ req }),
  });

  server.applyMiddleware({ app });

  app.get('/', (req, res, next) => {
    res.send('Hello World');
  });

  app.use((req, res, next) => {
    next(new NotFound('Route Not Found'));
  });

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`app running on ${port}`);
  });
};

run();

export default app;
