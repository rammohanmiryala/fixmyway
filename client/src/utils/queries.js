import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query getProjets{
    projects{
      _id
      projectAuthor
      projectTitle
      createdAt
    }
  }
`;


// export const QUERY_SINGLE_PROJECTS = gql`
//   query getSingleProject($id: ID!) {
//   project(id: $id) {
//     projectTitle
//     comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//      }
//    }
//   }
// `;

