import _ from "lodash";
import RootQueryType from "./root_query_type.js";
import mutations from "./mutations.js";
import graphql from "graphql";
const { GraphQLSchema } = graphql;

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
});
