module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateProject {
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

type Mutation {
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
  startTime: DateTime
  endTime: DateTime
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
  startTime: DateTime
  endTime: DateTime
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

input TaskCreateWithoutCreatedByInput {
  id: ID
  title: String!
  priority: Int
  status: Int
  startTime: DateTime
  endTime: DateTime
  inProject: ProjectCreateOneWithoutTasksInput
}

input TaskCreateWithoutInProjectInput {
  id: ID
  title: String!
  priority: Int
  status: Int
  startTime: DateTime
  endTime: DateTime
  createdBy: UserCreateOneWithoutTasksInput
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
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
}

type TaskPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  priority: Int
  status: Int
  startTime: DateTime
  endTime: DateTime
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
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
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
  startTime: DateTime
  endTime: DateTime
  createdBy: UserUpdateOneWithoutTasksInput
  inProject: ProjectUpdateOneWithoutTasksInput
}

input TaskUpdateManyDataInput {
  title: String
  priority: Int
  status: Int
  startTime: DateTime
  endTime: DateTime
}

input TaskUpdateManyMutationInput {
  title: String
  priority: Int
  status: Int
  startTime: DateTime
  endTime: DateTime
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

input TaskUpdateWithoutCreatedByDataInput {
  title: String
  priority: Int
  status: Int
  startTime: DateTime
  endTime: DateTime
  inProject: ProjectUpdateOneWithoutTasksInput
}

input TaskUpdateWithoutInProjectDataInput {
  title: String
  priority: Int
  status: Int
  startTime: DateTime
  endTime: DateTime
  createdBy: UserUpdateOneWithoutTasksInput
}

input TaskUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutCreatedByDataInput!
}

input TaskUpdateWithWhereUniqueWithoutInProjectInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutInProjectDataInput!
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
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
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
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTasksInput {
  create: UserCreateWithoutTasksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  tasks: TaskCreateManyWithoutCreatedByInput
}

input UserCreateWithoutTasksInput {
  id: ID
  name: String!
  email: String!
  password: String!
  projects: ProjectCreateManyWithoutCreatedByInput
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
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
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

input UserUpdateWithoutProjectsDataInput {
  name: String
  email: String
  password: String
  tasks: TaskUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutTasksDataInput {
  name: String
  email: String
  password: String
  projects: ProjectUpdateManyWithoutCreatedByInput
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
    