import { getUserId } from '../utils';

const projects = (root, args, context, info) => context.prisma.projects();

const project = (root, args, context, info) =>
  context.prisma.project({ id: args.id });

const tasks = (root, args, context, info) => context.prisma.tasks();

const task = (root, args, context, info) =>
  context.prisma.task({ id: args.id });

const currentUser = (root, args, context, info) => {
  const userID = getUserId(context);
  if (!userID) {
    return null;
  }
  return context.prisma.user({ id: userID });
};

export default { projects, project, tasks, task, currentUser };
