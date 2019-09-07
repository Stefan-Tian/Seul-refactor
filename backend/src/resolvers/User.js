const projects = (root, args, context) =>
  context.prisma.user({ id: root.id }).projects();

const tasks = (root, args, context) => {
  context.prisma.user({ id: root.id }).tasks();
};

export default { projects, tasks };
