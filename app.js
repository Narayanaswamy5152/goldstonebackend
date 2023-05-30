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

app.get("/todos/:Id/", async (request, response) => {
  const { Id } = request.params;

  const getTodoQuery = `
    SELECT
      *
    FROM
      todo
    WHERE
      id = ${Id};`;
  const todo = await database.get(getTodoQuery);
  response.send(todo);
});

app.post("/todos/", async (request, response) => {
  const { id, name, email, gender } = request.body;
  const postTodoQuery = `
  INSERT INTO
    todo (id, name, email, gender)
  VALUES
    (${id}, '${name}', '${email}', '${gender}');`;
  await database.run(postTodoQuery);
  response.send("Todo Successfully Added");
});

app.put("/todos/:Id/", async (request, response) => {
  const { Id } = request.params;
  let updateColumn = "";
  const requestBody = request.body;
  switch (true) {
    case requestBody.status !== undefined:
      updateColumn = "name";
      break;
    case requestBody.priority !== undefined:
      updateColumn = "email";
      break;
    case requestBody.todo !== undefined:
      updateColumn = "gender";
      break;
  }
  const previousTodoQuery = `
    SELECT
      *
    FROM
      todo
    WHERE 
      id = ${Id};`;
  const previous = await database.get(previous);

  const {
    name = previous.name,
    email = previous.email,
    gender = previous.gender,
  } = request.body;

  const updateQuery = `
    UPDATE
      todo
    SET
      name='${name}',
      email='${email}',
      gender='${gender}'
    WHERE
      id = ${Id};`;

  await database.run(updateQuery);
  response.send(`${updateColumn} Updated`);
});

app.delete("/todos/:Id/", async (request, response) => {
  const { Id } = request.params;
  const deleteTodoQuery = `
  DELETE FROM
    todo
  WHERE
    id = ${Id};`;

  await database.run(deleteTodoQuery);
  response.send("Row Deleted");
});

module.exports = app;
