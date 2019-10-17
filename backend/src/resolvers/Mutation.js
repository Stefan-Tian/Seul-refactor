import bcrypt from 'bcryptjs';
import { getUserId } from '../utils';

const signup = async (root, args, context) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  if (!user) {
    throw new Error('Something went wrong while signing up');
  }
  context.request.session.userId = user.id;
  return user;
};

const login = async (root, args, context) => {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error(`No such user found for email: ${email}`);
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  context.request.session.userId = user.id;
  return user;
};

const logout = (root, args, context) => {
  context.response.clearCookie('qid');
  context.request.session.destroy(e => {
    if (e) {
      return e;
    }
    return 'Successfully logged out';
  });
};

const createTask = async (root, { projectId, ...rest }, context) => {
  const userId = getUserId(context);
  if (!userId) {
    throw new Error('Not Authorized!');
  }

  return await context.prisma.createTask({
    ...rest,
    createdBy: { connect: { id: userId } },
    inProject: { connect: { id: projectId } }
  });
};

const updateTask = async (root, { id, ...updatedTask }, context) => {
  const userId = getUserId(context);
  if (!userId) {
    throw new Error('Not Authorized!');
  }

  return await context.prisma.updateTask({
    data: {
      ...updatedTask
    },
    where: {
      id
    }
  });
};

const deleteTask = async (root, args, context) => {
  const userId = getUserId(context);

  if (!userId) {
    throw new Error('Not Authorized!');
  }

  return await context.prisma.deleteTask({
    id: args.id
  });
};

const createProject = async (root, args, context) => {
  const userId = getUserId(context);
  if (!userId) {
    throw new Error('Not Authorized!');
  }

  return await context.prisma.createProject({
    ...args,
    createdBy: { connect: { id: userId } }
  });
};

const updateProject = async (root, { id, ...updatedProject }, context) => {
  const userId = getUserId(context);

  if (!userId) {
    throw new Error('Not Authorized!');
  }

  return await context.prisma.updateProject({
    data: {
      ...updatedProject
    },
    where: {
      id
    }
  });
};

const deleteProject = async (root, args, context) => {
  const userId = getUserId(context);

  if (!userId) {
    throw new Error('Not Authorized!');
  }

  await context.prisma.deleteManyTasks({
    inProject: {
      id: args.id
    }
  });
  return await context.prisma.deleteProject({
    id: args.id
  });
};

const createMessage = async (root, { taskId, ...rest }, context) => {
  const userId = getUserId(context);
  if (!userId) {
    throw new Error('Not Authorized!');
  }
  const message = await context.prisma.createMessage({
    ...rest,
    createdBy: { connect: { id: userId } },
    inTask: { connect: { id: taskId } }
  });

  return message;
};

const updateMessage = async (root, { id, text }, context) => {
  const userId = getUserId(context);

  if (!userId) {
    throw new Error('Not Authorized!');
  }

  const updatedMessage = await context.prisma.updateMessage({
    data: {
      text
    },
    where: {
      id
    }
  });

  return updatedMessage;
};

const deleteMessage = async (root, { id }, context) => {
  const userId = getUserId(context);

  if (!userId) {
    throw new Error('Not Authorized!');
  }

  const deletedMessage = await context.prisma.deleteMessage({
    id
  });

  return deletedMessage;
};

export default {
  signup,
  login,
  logout,
  createTask,
  updateTask,
  deleteTask,
  createProject,
  deleteProject,
  updateProject,
  createMessage,
  updateMessage,
  deleteMessage
};
