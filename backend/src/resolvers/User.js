const projects = (root, args, context) =>
  context.prisma.user({ id: root.id }).projects();

const tasks = (root, args, context) =>
  context.prisma.user({ id: root.id }).tasks();

const messages = (root, args, context) =>
  context.prisma.user({ id: root.id }).messages();

export default { projects, tasks, messages };
