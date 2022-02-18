const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Project {
    _id: ID
    projectTitle: String
    projectDescription: String
    projectAuthor:String
    createdAt: String
    category: Category
    comments: [Comment]!
  }
  type Category {
    _id: ID
    name: String
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    rating:Int
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    categories: [Category]
    projects:[Project]
    project(projectId:ID!): Project
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(projectId: ID!, commentText: String!): Project

  }
`;

module.exports = typeDefs;
