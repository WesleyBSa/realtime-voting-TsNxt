# Realtime Voting API

## Overview

The Realtime Voting API is a backend service built to create and manage polls in real-time, allowing users to vote on options and receive immediate updates via WebSocket. This project demonstrates the integration of RESTful APIs with real-time communication using modern technologies.

## Features

- Create polls with multiple options.
- Retrieve all polls.
- Vote on a poll option.
- Real-time updates on votes via WebSocket.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for building the backend logic.
- **Express**: Framework for building RESTful APIs.
- **Socket.IO**: Real-time communication between server and clients.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **TypeScript**: Strongly-typed language for JavaScript.

### Database

- **MongoDB**: NoSQL database for storing polls and votes.

### Development Tools

- **dotenv**: Manage environment variables.
- **ts-node-dev**: Development tool for running TypeScript files with live reload.
- **Postman**: API testing tool.

## Endpoints

### 1. **Create a Poll**

**POST** `/api/polls`

**Request Body:**

```json
{
  "question": "Which programming language do you prefer?",
  "options": ["Java", "Python", "Golang", "Typescript"]
}
```

**Response:**

```json
{
  "message": "Poll created successfully",
  "poll": {
    "_id": "64e2f9c123456789abcd1234",
    "question": "Which programming language do you prefer?",
    "options": ["JavaScript", "Python", "Golang"],
    "votes": {}
  }
}
```

### 2. **Retrieve Polls**

**GET** `/api/polls`

**Response:**

```json
[
  {
    "_id": "64e2f9c123456789abcd1234",
    "question": "Which programming language do you prefer?",
    "options": ["Java", "Python", "Golang", "Typescript"],
    "votes": {}
  }
]
```

### 3. **Vote on a Poll**

**POST** `/api/polls/vote`

**Request Body:**

```json
{
  "pollId": "64e2f9c123456789abcd1234",
  "option": "Golang"
}
```

**Response:**

```json
{
  "message": "VoteX registered successfully"
}
```

## Real-Time Communication

When a vote is cast, all connected clients receive an update via WebSocket. This ensures users see live results without refreshing the page.

## How to Run

### Prerequisites

- Node.js installed
- MongoDB running locally or via a cloud service
- Postman or any API testing tool for testing

### Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables in a `.env` file:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Testing

- Use Postman to test the API endpoints.
- Connect a client application to the WebSocket server to receive real-time updates.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.


