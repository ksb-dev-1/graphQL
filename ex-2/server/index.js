import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import connectToDataBase from "./db/mongoDB.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    //schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  console.log("hello");
});

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectToDataBase(process.env.MONGO_DB_CONNECTION_STRING);
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
