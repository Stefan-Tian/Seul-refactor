module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMessage {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  text: String!
  inTask: Task
  createdBy: User
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  text: String!
  inTask: TaskCreateOneWithoutMessagesInput
  createdBy: UserCreateOneWithoutMessagesInput
}

input MessageCreateManyWithoutCreatedByInput {
  create: [MessageCreateWithoutCreatedByInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutInTaskInput {
  create: [MessageCreateWithoutInTaskInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutCreatedByInput {
  id: ID
  text: String!
  inTask: TaskCreateOneWithoutMessagesInput
}

input MessageCreateWithoutInTaskInput {
  id: ID
  text: String!
  createdBy: UserCreateOneWithoutMessagesInput
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
  inTask: TaskUpdateOneWithoutMessagesInput
  createdBy: UserUpdateOneWithoutMessagesInput
}

input MessageUpdateManyDataInput {
  text: String
}

input MessageUpdateManyMutationInput {
  text: String
}

input MessageUpdateManyWithoutCreatedByInput {
  create: [MessageCreateWithoutCreatedByInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutInTaskInput {
  create: [MessageCreateWithoutInTaskInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutInTaskInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutInTaskInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutCreatedByDataInput {
  text: String
  inTask: TaskUpdateOneWithoutMessagesInput
}

input MessageUpdateWithoutInTaskDataInput {
  text: String
  createdBy: UserUpdateOneWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutCreatedByInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutCreatedByDataInput!
}

input MessageUpdateWithWhereUniqueWithoutInTaskInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutInTaskDataInput!
}

input MessageUpsertWithWhereUniqueWithoutCreatedByInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutCreatedByDataInput!
  create: MessageCreateWithoutCreatedByInput!
}

input MessageUpsertWithWhereUniqueWithoutInTaskInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutInTaskDataInput!
  create: MessageCreateWithoutInTaskInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  inTask: TaskWhereInput
  createdBy: UserWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  createdAt: DateTime!
  title: String!
  createdBy: User
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  title: String!
  createdBy: UserCreateOneWithoutProjectsInput
  tasks: TaskCreateManyWithoutInProjectInput
}

input ProjectCreateManyWithoutCreatedByInput {
  create: [ProjectCreateWithoutCreatedByInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutTasksInput {
  create: ProjectCreateWithoutTasksInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutCreatedByInput {
  id: ID
  title: String!
  tasks: TaskCreateManyWithoutInProjectInput
}

input ProjectCreateWithoutTasksInput {
  id: ID
  title: String!
  createdBy: UserCreateOneWithoutProjectsInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
}

type ProjectPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  title: String
  createdBy: UserUpdateOneWithoutProjectsInput
  tasks: TaskUpdateManyWithoutInProjectInput
}

input ProjectUpdateManyDataInput {
  title: String
}

input ProjectUpdateManyMutationInput {
  title: String
}

input ProjectUpdateManyWithoutCreatedByInput {
  create: [ProjectCreateWithoutCreatedByInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneWithoutTasksInput {
  create: ProjectCreateWithoutTasksInput
  update: ProjectUpdateWithoutTasksDataInput
  upsert: ProjectUpsertWithoutTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutCreatedByDataInput {
  title: String
  tasks: TaskUpdateManyWithoutInProjectInput
}

input ProjectUpdateWithoutTasksDataInput {
  title: String
  createdBy: UserUpdateOneWithoutProjectsInput
}

input ProjectUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutCreatedByDataInput!
}

input ProjectUpsertWithoutTasksInput {
  update: ProjectUpdateWithoutTasksDataInput!
  create: ProjectCreateWithoutTasksInput!
}

input ProjectUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutCreatedByDataInput!
  create: ProjectCreateWithoutCreatedByInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdBy: UserWhereInput
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Task {
  id: ID!
  createdAt: DateTime!
  title: String!
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  createdBy: User
  inProject: Project
}

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  id: ID
  title: String!
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  messages: MessageCreateManyWithoutInTaskInput
  createdBy: UserCreateOneWithoutTasksInput
  inProject: ProjectCreateOneWithoutTasksInput
}

input TaskCreateManyWithoutCreatedByInput {
  create: [TaskCreateWithoutCreatedByInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateManyWithoutInProjectInput {
  create: [TaskCreateWithoutInProjectInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateOneWithoutMessagesInput {
  create: TaskCreateWithoutMessagesInput
  connect: TaskWhereUniqueInput
}

input TaskCreateWithoutCreatedByInput {
  id: ID
  title: String!
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  messages: MessageCreateManyWithoutInTaskInput
  inProject: ProjectCreateOneWithoutTasksInput
}

input TaskCreateWithoutInProjectInput {
  id: ID
  title: String!
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  messages: MessageCreateManyWithoutInTaskInput
  createdBy: UserCreateOneWithoutTasksInput
}

input TaskCreateWithoutMessagesInput {
  id: ID
  title: String!
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  createdBy: UserCreateOneWithoutTasksInput
  inProject: ProjectCreateOneWithoutTasksInput
}

type TaskEdge {
  node: Task!
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  priority_ASC
  priority_DESC
  status_ASC
  status_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
}

type TaskPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
}

input TaskScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  priority: Int
  priority_not: Int
  priority_in: [Int!]
  priority_not_in: [Int!]
  priority_lt: Int
  priority_lte: Int
  priority_gt: Int
  priority_gte: Int
  status: Int
  status_not: Int
  status_in: [Int!]
  status_not_in: [Int!]
  status_lt: Int
  status_lte: Int
  status_gt: Int
  status_gte: Int
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateInput {
  title: String
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  messages: MessageUpdateManyWithoutInTaskInput
  createdBy: UserUpdateOneWithoutTasksInput
  inProject: ProjectUpdateOneWithoutTasksInput
}

input TaskUpdateManyDataInput {
  title: String
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
}

input TaskUpdateManyMutationInput {
  title: String
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
}

input TaskUpdateManyWithoutCreatedByInput {
  create: [TaskCreateWithoutCreatedByInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  set: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithoutInProjectInput {
  create: [TaskCreateWithoutInProjectInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  set: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutInProjectInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutInProjectInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateOneWithoutMessagesInput {
  create: TaskCreateWithoutMessagesInput
  update: TaskUpdateWithoutMessagesDataInput
  upsert: TaskUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: TaskWhereUniqueInput
}

input TaskUpdateWithoutCreatedByDataInput {
  title: String
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  messages: MessageUpdateManyWithoutInTaskInput
  inProject: ProjectUpdateOneWithoutTasksInput
}

input TaskUpdateWithoutInProjectDataInput {
  title: String
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  messages: MessageUpdateManyWithoutInTaskInput
  createdBy: UserUpdateOneWithoutTasksInput
}

input TaskUpdateWithoutMessagesDataInput {
  title: String
  priority: Int
  status: Int
  startDate: DateTime
  endDate: DateTime
  createdBy: UserUpdateOneWithoutTasksInput
  inProject: ProjectUpdateOneWithoutTasksInput
}

input TaskUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutCreatedByDataInput!
}

input TaskUpdateWithWhereUniqueWithoutInProjectInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutInProjectDataInput!
}

input TaskUpsertWithoutMessagesInput {
  update: TaskUpdateWithoutMessagesDataInput!
  create: TaskCreateWithoutMessagesInput!
}

input TaskUpsertWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutCreatedByDataInput!
  create: TaskCreateWithoutCreatedByInput!
}

input TaskUpsertWithWhereUniqueWithoutInProjectInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutInProjectDataInput!
  create: TaskCreateWithoutInProjectInput!
}

input TaskWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  priority: Int
  priority_not: Int
  priority_in: [Int!]
  priority_not_in: [Int!]
  priority_lt: Int
  priority_lte: Int
  priority_gt: Int
  priority_gte: Int
  status: Int
  status_not: Int
  status_in: [Int!]
  status_not_in: [Int!]
  status_lt: Int
  status_lte: Int
  status_gt: Int
  status_gte: Int
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  createdBy: UserWhereInput
  inProject: ProjectWhereInput
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  projects: ProjectCreateManyWithoutCreatedByInput
  tasks: TaskCreateManyWithoutCreatedByInput
  messages: MessageCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTasksInput {
  create: UserCreateWithoutTasksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMessagesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  projects: ProjectCreateManyWithoutCreatedByInput
  tasks: TaskCreateManyWithoutCreatedByInput
}

input UserCreateWithoutProjectsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  tasks: TaskCreateManyWithoutCreatedByInput
  messages: MessageCreateManyWithoutCreatedByInput
}

input UserCreateWithoutTasksInput {
  id: ID
  name: String!
  email: String!
  password: String!
  projects: ProjectCreateManyWithoutCreatedByInput
  messages: MessageCreateManyWithoutCreatedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  projects: ProjectUpdateManyWithoutCreatedByInput
  tasks: TaskUpdateManyWithoutCreatedByInput
  messages: MessageUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutTasksInput {
  create: UserCreateWithoutTasksInput
  update: UserUpdateWithoutTasksDataInput
  upsert: UserUpsertWithoutTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMessagesDataInput {
  name: String
  email: String
  password: String
  projects: ProjectUpdateManyWithoutCreatedByInput
  tasks: TaskUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutProjectsDataInput {
  name: String
  email: String
  password: String
  tasks: TaskUpdateManyWithoutCreatedByInput
  messages: MessageUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutTasksDataInput {
  name: String
  email: String
  password: String
  projects: ProjectUpdateManyWithoutCreatedByInput
  messages: MessageUpdateManyWithoutCreatedByInput
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserUpsertWithoutTasksInput {
  update: UserUpdateWithoutTasksDataInput!
  create: UserCreateWithoutTasksInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    