# F-One API REST

A RESTful API for managing Formula 1 teams (escuderies), pilots, and user authentication. Built with Node.js, Express, and MongoDB.

## Features

- User authentication (signup & login) with JWT
- CRUD operations for pilots and escuderies
- Get top pilots by points
- Get pilots by escuderia
- Protected routes for modifying data
- MongoDB models for pilots, escuderies, and users

## Project Structure

```
.
├── app.js
├── escuderia.js
├── pilot.js
├── package.json
├── .env.example
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── mainController.js
├── middlewares/
│   └── auth.js
├── models/
│   ├── escuderia.js
│   ├── pilot.js
│   ├── user.js
│   ├── exemples_escuderies.json
│   ├── exemples_pilots.json
│   └── exemples_usuaris.json
└── routes/
    └── api.js
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env` and configure as needed.

### Running the Application

Start the server:

```sh
node app.js
```

Or with nodemon for development:

```sh
npx nodemon app.js
```

The API will run on `http://localhost:3000` by default.

## API Endpoints

### Authentication

- `POST /api/signup` — Register a new user
- `POST /api/login` — Login and receive a JWT token

### Pilots

- `GET /api/pilots` — List all pilots
- `GET /api/pilots/top` — List top 5 pilots by points
- `GET /api/pilots/:id` — Get pilot by ID
- `POST /api/pilots` — Create a new pilot (protected)
- `PUT /api/pilots/:id` — Update a pilot (protected)
- `DELETE /api/pilots/:id` — Delete a pilot (protected)

### Escuderies

- `GET /api/escuderies` — List all escuderies
- `GET /api/escuderies/:id` — Get escuderia by ID
- `POST /api/escuderies` — Create a new escuderia (protected)
- `PUT /api/escuderies/:id` — Update an escuderia (protected)
- `DELETE /api/escuderies/:id` — Delete an escuderia (protected)
- `GET /api/escuderies/:id/pilots` — List pilots of an escuderia

## Authentication

For protected routes, include the JWT token in the `Authorization` header:

```
Authorization: Bearer <token>
```

## Example Data

Example data for pilots, escuderies, and users can be found in the [`models`](models/) folder as JSON files.

## License

ISC

---

Made for educational purposes.
