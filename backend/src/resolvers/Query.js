import { getUserId } from '../utils';

const projects = (root, args, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }
  return context.prisma.user({ id: userID }).projects();
};

const project = (root, { id }, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }

  return context.prisma.user({ id: userID }).project({ id });
};

const tasks = (root, args, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }
  return context.prisma.user({ id: userID }).tasks();
};

const task = (root, { id }, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }

  return context.prisma.user({ id: userID }).task({ id });
};

const currentUser = (root, args, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }
  return context.prisma.user({ id: userID });
};

export default { projects, project, tasks, task, currentUser };
