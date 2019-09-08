const createdBy = (root, args, context) =>
  context.prisma.project({ id: root.id }).createdBy();

const tasks = (root, args, context) =>
  context.prisma.project({ id: root.id }).tasks();

export default { createdBy, tasks };
