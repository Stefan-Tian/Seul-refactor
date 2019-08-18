import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import keys from '../keys';
import { getUserId } from './utils';

const resolvers = {
  Query: {
    projects: (root, args, context, info) => context.prisma.projects(),
    project: id => projects[id],
    tasks: (root, args, context, info) => context.prisma.tasks(),
    task: id => tasks[id],
    users: (root, args, context, info) => context.prisma.users(),
    currentUser: (root, args, context, info) => {
      const userID = getUserId(context);
      console.log(context.request.session);
      if (!userID) {
        return null;
      }
      return context.prisma.user({ id: userID });
    }
  },
  Mutation: {
    signup: async (root, args, context) => {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.createUser({ ...args, password });
      context.request.session.userId = user.id;
      console.log(context.request.session);
      return user;
    },
    login: async (root, args, context) => {
      const user = await context.prisma.user({ email: args.email });
      if (!user) {
        throw new Error(`No such user found for email: ${email}`);
      }

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }

      context.request.session.userId = user.id;
      console.log(user.id, context.request.session.userId);
      console.log(context.request.session);
      return user;
    },
    createTask: (root, args, context) =>
      context.prisma.createTask({
        title: args.title
      }),
    updateTask: (parents, args) => {
      const updatedTask = {
        title: args.title
      };
      let updated;
      tasks = tasks.map(task => {
        if (task.id === args.id) {
          updated = {
            ...task,
            ...updatedTask
          };
          return updated;
        }
        return task;
      });
      return updated;
    },
    deleteTask: (parents, args) => {
      const deletedTask = tasks.filter(({ id }) => id === args.id);
      tasks = tasks.filter(({ id }) => id !== args.id);
      return deletedTask[0];
    },
    createProject: (root, args, context) =>
      context.prisma.createProject({
        title: args.title
      }),
    updateProject: (parents, args) => {
      const updatedProject = {
        title: args.title
      };
      let updated;
      projects = projects.map(project => {
        if (project.id === args.id) {
          updated = {
            ...project,
            ...updatedProject
          };
          return updated;
        }
        return project;
      });
      return updated;
    },
    deleteProject: (parents, args) => {
      const deletedProject = projects.filter(({ id }) => id === args.id);
      projects = projects.filter(({ id }) => id !== args.id);
      return deletedProject[0];
    }
  }
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
