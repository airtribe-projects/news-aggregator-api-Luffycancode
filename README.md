# News Recommendation API

A personalized News Recommendation REST API built with Node.js, Express, MongoDB, and JWT Authentication. Users can register, log in, manage their news preferences, and receive personalized news recommendations fetched from the GNews API.

## Features

- User Registration with encrypted passwords using bcrypt
- User Login with JWT authentication
- JWT Authorization Middleware for protected routes
- MongoDB integration using Mongoose
- Get user preferences
- Update user preferences
- Fetch personalized news based on user preferences
- Integration with GNews API
- User-specific news recommendations

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Axios
- dotenv
- GNews API

## API Endpoints

### Public Routes

#### Register User

http POST /users/signup 

Request Body:

json {     "name": "Tony Stark",     "email": "tony@stark.com",     "password": "ironman",     "preferences": ["technology", "business"] } 

---

#### Login User

http POST /users/login 

Request Body:

json {     "email": "tony@stark.com",     "password": "ironman" } 

Response:

json {     "token": "<JWT_TOKEN>" } 

## Protected Routes

Include the JWT token in the Authorization header:

http Authorization: Bearer <JWT_TOKEN> 

### Get User Preferences

http GET /users/preferences 

Response:

json {     "preferences": ["technology", "business"] } 

---

### Update User Preferences

http PUT /users/preferences 

Request Body:

json {     "preferences": ["sports", "gaming"] } 

Response:

json {     "message": "Preferences updated" } 

---

### Get Personalized News

http GET /get-news 

Response:

json {     "news": [         {             "title": "...",             "description": "...",             "url": "...",             "publishedAt": "..."         }     ] } 

## Environment Variables

Create a .env file in the root directory and add:

env PORT=3000 JWTSecretkey=your_secret_key JWTExpirationTime=1h NEWS_API_KEY=your_gnews_api_key 

## Installation

Clone the repository:

bash git clone <repository-url> cd news-aggregator-api 

Install dependencies:

bash npm install 

Start MongoDB locally.

Run the application:

bash npm run dev 

The server will start on:

text http://localhost:3000 

## Authentication Flow

text User Login ↓ JWT Generated ↓ Client stores JWT ↓ Authorization: Bearer <token> ↓ JWT Middleware verifies token ↓ Extract user email ↓ Access protected routes 

## Future Improvements

- Input validation using Joi or express-validator
- Bookmark articles
- News history tracking
- Pagination support
- MongoDB Atlas deployment
- React Native frontend
- AI-powered news summaries
