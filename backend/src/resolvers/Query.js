import { getUserId } from '../utils';

const projects = (root, args, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }
  return context.prisma.user({ id: userID }).projects();
};

const project = async (root, { id }, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }

  const project = await context.prisma.projects({
    where: {
      id,
      createdBy: {
        id: userID
      }
    }
  });

  return project[0];
};

const tasks = (root, args, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }

  return context.prisma.user({ id: userID }).tasks();
};

const task = async (root, { id }, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }

  const task = await context.prisma.tasks({
    where: {
      id,
      createdBy: {
        id: userID
      }
    }
  });
  return task[0];
};

const currentUser = (root, args, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }
  return context.prisma.user({ id: userID });
};

export default { projects, project, tasks, task, currentUser };
