
# Password Strength Checker

This is a secure password strength checker service with MongoDB integration. It allows users to check the strength of their passwords and stores strong passwords in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Security](#security)

## Features

- Password strength checking based on specified criteria.
- MongoDB integration to store strong passwords.
- Input validation using `express-validator` for enhanced security.
- User-friendly API for password strength checking.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/krutk/password-strength-checker
   cd password-strength-checker
   ```
 2. **Install dependencies:**
	 ```
	 npm install
	 ```
2. **Set up MongoDB:**
	- Create a MongoDB database.
	- Update the MongoDB connection string in `src/app.js` to point to your database.
3. **Run the application:**
	```
	npm start
	```
	 The server will start on `http://localhost:5000`.

## Usage

### API Endpoint

-   **POST** `/api/checkPassword`
    
    Check the strength of a password.
    
    **Example Request:**
        
    `{
      "password": "YourStrongPassword123"
    }` 
    
    **Example Response:**
        
    `{
      "isStrong": true,
      "steps": 0,
      "checks": {
        "noLowerCase": false,
        "noUpperCase": false,
        "noDigit": false,
        "hasConsecutiveCharacters": false,
        "hasThreeRepeatingCharacters": false
      }
    }` 
    

## Frontend

The frontend is built with React. It provides a user interface for checking password strength. The main components are:

-   `PasswordStrengthChecker`: Handles password input, strength checking, and displays the result.
- To Install dependencies
	```
	npm install -f
	```

## Security

Enhance security by validating and sanitizing user inputs. Consider using a validation library like `express-validator` for input validation.
