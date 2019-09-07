const createdBy = (root, args, context) =>
  context.prisma.project({ id: root.id }).createdBy();

export default { createdBy };
