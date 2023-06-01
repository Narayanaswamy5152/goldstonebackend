# Details application 
contain an `app.js` file and an empty database file `todoApplication.db`.

Created a table with the name `details` with the following columns,

**details Table**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| name     | TEXT    |
| email    | TEXT    |
| gender   | TEXT    |

and written APIs to perform operations on the table `todo`,




### API 1

#### Path: `/details/:Id/`

#### Method: `GET`

#### Description:

Returns a specific row based on the  ID

#### Response

```
{
  id: 1,
  name: "narayana",
  email: "narayana@gmail.com",
  gender: "Male"
}
```

### API 2

#### Path: `/details/`

#### Method: `PUT`

#### Description:

updates a row in a details table

#### Request

```
{
  "id": 4,
  "name": "dinesh",
  "email": "dinesh@gmail.com",
  "gender": "Male"
}
```

#### Response

```
 Details Updated
```

### API 3

#### Path: `/details/`

#### Method: `POST`

#### Description:

Create a row in the details table,

#### Request

```
{
  "id": 4,
  "name": "dinesh",
  "email": "dinesh@gmail.com",
  "gender": "Male"
}
```

#### Response

```
 Details Successfully Added
```

