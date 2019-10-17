import gql from 'graphql-tag';

export const TASK_MESSAGES = gql`
  query task($id: ID!) {
    task(id: $id) {
      id
      messages {
        id
        text
      }
    }
  }
`;

export const PROJECTS = gql`
  {
    projects {
      id
      title
      tasks {
        id
        title
        status
        priority
        startDate
        endDate
      }
    }
  }
`;

export const CURRENT_USER = gql`
  {
    currentUser {
      name
      email
    }
  }
`;
