# BACKEND

This is the backend for this app

## Typescript

If you do not have typescript installed run this

```bash
npm install -g typescript
```

## Enviroment

Create a .env file with the structure of the file
.env.example

PORT=\*\*\*

DB_NAME=\*\*

MONGO_URI=

## Run the project 🚀

```bash
npm install or yarn install
```

Then:

```bash
npm run dev or yarn dev
```

## 👉 Usage

### GET /

You shuold see something like this

**Response**

```
   { uptime: ********** }

```

### GET /students

This returns all studens of the app, the response should be something like this

**Response**

```
  {
    "students": [{
        "_id": "63d914f827x71exxxxx6a1cde32eec",
        "name": "mi primer estudiante",
        "identification": 2233444433334,
        "subjects": [{
            "name": "ciencias puras",
            "grades": [4, 5]
        }, {
            "name": "musica",
            "grades": [5]
        }]
    }, {
        "_id": "63b918xxs802771e6a1cde32ef6",
        "name": "juan jose torrez",
        "identification": 897797979696,
        "subjects": [{
            "name": "matematicas",
            "grades": [1, 4, 5]
        }, {
            "name": "ingles",
            "grades": [5, 2]
        }]
    }]
}
```

Subject {
name: string;
grades: number[];
}

Student {
name: string;
identification: number;
subjects: Subject[];
}

### Description

Each studen has name, identification and subjects
to register and every subject can have diferents grades

It indicates that server is up

### POST /students 👀

To save a student in our app

**Parameters**

|             NAME |  TYPE  | DESCRIPTION                                                          |
| ---------------: | :----: | -------------------------------------------------------------------- |
|           `name` | string | student's name                                                       |
| `identification` | number | student's ID (min size: 10)                                          |
|       `subjects` | array  | it contains the subjecs of a student                                 |
|        `subject` | object | it contains subject's name and grades of that subject                |
|   `subject.name` | string | it contains subject's name                                           |
| `subject.grades` | array  | it contains subject's grades in numbers which is each quiz, homework |

**Reuqest example**

```
{
        "name": "jhon",
        "identification": 1020102030,
        "subjects": [{
            "name": "math",
            "grades": [5, 2, 4]
        }],

    }

```

**Response example**

```
{
    "student": {
        "name": "jhon",
        "identification": 1020102030,
        "subjects": [{
            "name": "biology",
            "grades": [3, 5, 4, 5]
        }],
        "_id": "63d8f1c02771e6a1cde26e99"
    }
}
```

![api production](https://www.mern-api.store)
