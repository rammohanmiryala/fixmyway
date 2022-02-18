import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// export const ADD_COMMENT = gql`
//   mutation addComment($projectId: ID!, $commentText: String!) {
//     addComment(projectId: $projectId, commentText: $commentText) {
//       _id
//       projectTitle
//       projectDescription
//       projectAuthor
//       category
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
// export const ADD_PROJECT = gql`
//   mutation addProject($projectId: ID!, $projectTitle: String!,$projectDescription: String!) {
//     addProject(projectId: $projectId, commentText: $commentText) {
//       _id
//       projectTitle
//       projectDescription
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
