import express from "express";
import { graphqlHTTP } from "express-graphql";
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000/graphql");
});
