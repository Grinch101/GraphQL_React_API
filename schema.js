const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const axios = require("axios");

// launch type:
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    rocket: { type: RocketType },
    success: { type: GraphQLBoolean },
  }),
});

// rocket type:
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLInt },
    rocket_name: { type: GraphQLString },
  }),
});

// Root Query:
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v4/launches`)
          .then((res) => res.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v4/${args.flight_number}`)
          .then((res) => {
            res.data;
          });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
