const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Project {
    _id: ID
    postCode:Int
    stateName:String
    districtName: String
    streetAddress:String
    summary: String
    description: String
    cost:Float
    map:String
    problemimg: String
    progressImg: String
    categories:Int
    comments: [Comment]
    funds: [Fund]
    category: Category
  }

  type Category {
    _id: ID
    name: String
  }
  type Comment {
    _id: ID
    commentText:String
    commentAuthor: String
    rating:Int
    replies:[Reply]
  }

  type Reply{
    _id: ID
    replyText:String
    replyAuthor: String
  }
  type Fund {
    _id: ID
    cost:Float
    
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    categories: [Category]
    comments: [Comment]
    projects(category: ID, name: String,comment:ID, commentAuthor: String, rating:Int):[Project]
    project(_id: ID!): Project





  }





  

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
