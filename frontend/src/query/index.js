import gql from 'graphql-tag';

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
