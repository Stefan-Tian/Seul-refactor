const createdBy = (root, args, context) =>
  context.prisma.message({ id: root.id }).createdBy();

const inTask = (root, args, context) =>
  context.prisma.message({ id: root.id }).inTask();

export default { createdBy, inTask };
