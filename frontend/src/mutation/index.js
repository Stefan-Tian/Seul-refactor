import gql from 'graphql-tag';

export const SIGN_UP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

export const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      email
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!) {
    createProject(title: $title) {
      id
      title
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $title: String!) {
    updateProject(id: $id, title: $title) {
      id
      title
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask(
    $projectId: String!
    $title: String!
    $status: Int
    $priority: Int
    $startDate: String
    $endDate: String
  ) {
    createTask(
      projectId: $projectId
      title: $title
      status: $status
      priority: $priority
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      title
      status
      priority
      startDate
      endDate
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $id: ID!
    $title: String
    $status: Int
    $priority: Int
    $startDate: String
    $endDate: String
  ) {
    updateTask(
      id: $id
      title: $title
      status: $status
      priority: $priority
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      title
      status
      priority
      startDate
      endDate
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($text: String!, $taskId: String!) {
    createMessage(text: $text, taskId: $taskId) {
      id
      text
    }
  }
`;

export const UPDATE_MESSAGE = gql`
  mutation UpdateMessage($id: ID!, $text: String!) {
    UpdateMessage(id: $id, text: $text) {
      id
      text
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DeleteMessage($id: ID!) {
    DeleteMessage(id: $id, text: $text) {
      id
      text
    }
  }
`;
