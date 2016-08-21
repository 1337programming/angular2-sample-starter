import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} from 'graphql';

// In memory data store
const UserStore = [
  {
    'name': 'Patrick',
    'email': 'patrick@1337programming.com',
    'age': 103,
    'id': '1',
    'score': 50.2
  },
  {
    'name': 'Tom',
    'email': 'tom@1337programming.com',
    'age': 103,
    'id': '2',
    'score': 89.2
  },
];

// Root level queries
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt},
    score: {type: GraphQLFloat}
  })
});

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    user: {
      type: UserType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: {type: GraphQLString}
      },
      // The resolve function describes how to "resolve" or fulfill
      // the incoming query.
      // In this case we use the `id` argument from above as a key
      // to get the User from `data`
      resolve: function (_, args:any) {
        return UserStore[args.id];
      }
    }
  }
});

// Mutations @TODO
const UserMutations = new GraphQLObjectType({
  name: 'UserMutations',
  fields: () => ({
    addUser: {
      type: GraphQLString,
      description: 'Add a new user',
      args: {
        item: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, {item}) {
        if (UserStore.length >= 10) {
          // Remove the third time by keeping the first two
          UserStore.splice(2, 1);
        }
        
        UserStore.push(item);
        return item;
      }
    }
  })
});

// Schema
export const UserSchema = new GraphQLSchema({
  query: UserQuery,
  mutation: UserMutations
});
