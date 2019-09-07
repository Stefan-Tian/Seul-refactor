import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import keys from '../keys';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Project from './resolvers/Project';
import Task from './resolvers/Task';

const resolvers = {
  Query,
  Mutation,
  User,
  Project,
  Task
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req, prisma })
});

server.express.use(cookieParser());
server.express.use(
  session({
    name: 'qid',
    secret: keys.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  })
);

const cors = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:4000']
};

server.start({ cors }, () => console.log('Server is running on port 4000'));
