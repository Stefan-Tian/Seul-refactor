const createdBy = (root, args, context) =>
  context.prisma.task({ id: root.id }).createdBy();

const inProject = (root, args, context) =>
  context.prisma.task({ id: root.id }).inProject();

const messages = (root, args, context) =>
  context.prisma.task({ id: root.id }).messages();

export default { createdBy, inProject, messages };
