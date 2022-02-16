const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Project {
    _id: ID
    postCode:Number
    stateName:String
    districtName: String
    streetAddress:String
    summary: String
    description: String
    cost:Number
    map:String
    problemimg: String
    progressImg: String
    createdAt:Date
    completedDate: Date
    categories:Number
    comments: [Comments]
  }

  type Category {
    _id: ID
    name: String
  }
  type Comment {
    _id: ID
    commentText:String
    commentAuthor: String
    rating:Number
    replies:[Reply]
  }
  type Donate {
    _id: ID
    cost:Float
    projects:[Project]
  }






































  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }





  

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
