const createdBy = (root, args, context) =>
  context.prisma.task({ id: root.id }).createdBy();

const inProject = (root, args, context) =>
  context.prisma.task({ id: root.id }).isProject();

export default { createdBy, inProject };
