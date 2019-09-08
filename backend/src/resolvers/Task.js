const createdBy = (root, args, context) =>
  context.prisma.task({ id: root.id }).createdBy();

const inProject = (root, args, context) =>
  context.prisma.task({ id: root.id }).inProject();

export default { createdBy, inProject };
