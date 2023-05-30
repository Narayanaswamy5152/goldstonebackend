# Details application 
contain an `app.js` file and an empty database file `todoApplication.db`.

Created a table with the name `todo` with the following columns,

**Todo Table**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| name     | TEXT    |
| email    | TEXT    |
| gender   | TEXT    |

and written APIs to perform operations on the table `todo`,




### API 1

#### Path: `/todos/:Id/`

#### Method: `GET`

#### Description:

Returns a specific row based on the  ID

#### Response

```
{
  id: 2,
  name: "Narayan",
  email: "narayana@gmail.com",
  gender: "Male"
}
```

### API 2

#### Path: `/todos/`

#### Method: `POST`

#### Description:

Create a row in the todo table,

#### Request

```
{
  "id": 2,
  "name": "dinesh",
  "email": "dinesh@gmail.com",
  "gender": "Male"
}
```

#### Response

```
Row Successfully Added
```

### API 3

#### Path: `/todos/:todoId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific row based on the ID

- **Scenario 1**

  - **Request**
    ```
    {
      "name": "keerti"
    }
    ```
  - **Response**

    ```
    name Updated
    ```

- **Scenario 2**

  - **Request**
    ```
    {
      "email": "keerti@gmail.com"
    }
    ```
  - **Response**

    ```
    email Updated
    ```

- **Scenario 3**

  - **Request**
    ```
    {
      "id": "5"
    }
    ```
  - **Response**

    ```
    id Updated
    ```

### API 4

#### Path: `/todos/:Id/`

#### Method: `DELETE`

#### Description:

Deletes a row from the todo table based on the row ID

#### Response

```
Row Deleted
```

<br/>

Use `npm install` to install the packages.
