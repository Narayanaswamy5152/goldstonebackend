/*
 *  Created a Table with name todo in the todoApplication.db file using the CLI.
 */

const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "todoApplication.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

app.get("/details/", async (request, response) => {
  const getDetailQuery = `
    SELECT 
      *
    FROM 
      details`;
  const detail = await database.all(getDetailQuery);
  response.send(detail);
});

app.put("/details/:id/", async (request, response) => {
  const { id } = request.params;
  const { Name } = request.body;
  const updateDetailQuery = `
  UPDATE
    details
  SET
    name ='${Name}'
  WHERE
    id = ${id};`;

  await database.run(updateDetailQuery);
  response.send("Details Updated");
});

app.post("/details/", async (request, response) => {
  const { id, name, email, gender, status } = request.body;
  const postDetailQuery = `
  INSERT INTO
    details (id, name,email,gender,status)
  VALUES
    (${id}, '${name}', '${email}','${gender}','${status}');`;
  await database.run(postDetailQuery);
  response.send("Details Successfully Added");
});
