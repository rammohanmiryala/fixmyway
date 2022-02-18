const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Category, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('users');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('users');
    },
    categories: async () => {
      return await Category.find();
    },
    projects: async () => {
      return Project.find().populate('projects');
    },
    project: async (parent, args) => {
      return await Project.findById(args.projectId).populate('catogary');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('projects');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addComment: async (parent, {projectId,commentText}, context) => {
      if (context.user) {
        return Comment.findOneAndUpdate(
          { _id:projectId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },
};
module.exports = resolvers;



    //   addProject: async (parent, {projectTitle,projectDescription}, context) => {
    //     if (context.user) {
    //       const project = await Project.create({
    //         projectTitle,
    //         projectDescription,
    //       });

    //       await User.findOneAndUpdate(

    //         { $addToSet: { project: project._id } }
    //       );

    //       return project;
    //     }
    //     throw new AuthenticationError('You need to be logged in!');
    //   }
    // },